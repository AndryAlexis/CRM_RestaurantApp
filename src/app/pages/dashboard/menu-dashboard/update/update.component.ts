import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormArray, FormControl } from '@angular/forms';
import { HeaderDashboardComponent } from "../../../../components/dashboard/header-dashboard/header-dashboard.component";
import { MenuService } from '../../../../services/menu.service';
import { IUserResponse } from '../../../../interfaces/user.interfaces';
import { DishService } from '../../../../services/dish.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-menu',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderDashboardComponent],
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateMenuComponent {
  menuForm: FormGroup;

  private menuService = inject(MenuService);
  private dishService = inject(DishService);
  private route = inject(ActivatedRoute);
  desserts?: any;
  mainDishes?: any;
  starters?: any;

  constructor(private fb: FormBuilder) {
    this.menuForm = this.fb.group({
      menuName: ['', Validators.required],
      date: ['', Validators.required],
      menuPrice: ['', [Validators.required, Validators.min(1)]],
      dishes : this.fb.array([]),
    });
  }

  async ngOnInit() {
    const result = await this.dishService.getAllDishes();
    const dishes = result.data;
    this.desserts = dishes.filter((dish: any) => dish.type === 'dessert');
    this.mainDishes = dishes.filter((dish: any) => dish.type === 'main');
    this.starters = dishes.filter((dish: any) => dish.type === 'starters');

    const menuId = this.route.snapshot.params['id'];

    try {   
      const menu = await this.menuService.getMenuById(menuId);
      console.log(menu);
    } catch (error: any) {
      Swal.fire({
        title: 'Error al obtener el menú',
        icon: 'error',
      })
      console.error('Error al obtener el menú:', error);
    }
  }

  async onSubmit() {
    // Check if form is valid before proceeding
    if (!this.menuForm.valid) {
      return;
    }

    // Get form values
    const menuName = this.menuForm.get('menuName')?.value;
    const date = this.menuForm.get('date')?.value;
    const dishes = this.menuForm.get('dishes')?.value;
    const price = this.menuForm.get('menuPrice')?.value;

    const menuId = this.route.snapshot.params['id'];
    try {
      // Extract dish IDs and create menu
      const dishIds = dishes.map((dish: any) => dish.id);
      await this.menuService.updateMenu(menuId, menuName, date, dishIds, price);

      Swal.fire({
        title: 'Menu actualizado correctamente',
        icon: 'success',
      })

    } catch (error: any) {
      // Handle error response
      const errorResponse = error.error as IUserResponse;
      const { status, title, message } = errorResponse;
      
      console.error('Error actualizando menu:', {
        status,
        title, 
        message
      });

      Swal.fire({
        title: 'Error al actualizar el menu',
        icon: 'error',
      })
    }

    this.menuForm.reset();
  }

  checkValidation(controlName: string): boolean {
    const control = this.menuForm.get(controlName);
    return control ? control.invalid && control.touched : false;
  }

  onCheckboxChange(event: any, dish: any) {
    const dishesArray = this.menuForm.get('dishes') as FormArray;
    if (event.target.checked) {
      // Add the dish to the array if checked
      dishesArray.push(new FormControl(dish));
    } else {
      // Remove the dish from the array if unchecked
      const index = dishesArray.controls.findIndex(x => x.value.id === dish.id);
      if (index !== -1) {
        dishesArray.removeAt(index);
      }
    }
  }
}