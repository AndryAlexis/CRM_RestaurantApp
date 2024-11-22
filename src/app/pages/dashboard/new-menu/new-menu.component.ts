import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderDashboardComponent } from "../../../components/dashboard/header-dashboard/header-dashboard.component";
import { MenuService } from '../../../services/menu.service';
import { IUserResponse } from '../../../interfaces/user.interfaces';

@Component({
  selector: 'app-new-menu',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderDashboardComponent],
  templateUrl: './new-menu.component.html',
  styleUrls: ['./new-menu.component.css']
})
export class NewMenuComponent {
  menuForm: FormGroup;

  private menuService = inject(MenuService);

  constructor(private fb: FormBuilder) {
    this.menuForm = this.fb.group({
      menuName: ['', Validators.required],
      date: ['', Validators.required],
      menuPrice: ['', [Validators.required, Validators.min(1)]],
      // mainDishes: this.fb.array(this.createDishArray()),
      // secondDishes: this.fb.array(this.createDishArray()),
      // desserts: this.fb.array(this.createDishArray())
    });
  }

  // createDishArray(): FormGroup[] {
  //   return [
  //     this.createDish(),
  //     this.createDish(),
  //     this.createDish(),
  //     this.createDish()
  //   ];
  // }

  // createDish(): FormGroup {
  //   return this.fb.group({
  //     name: ['', Validators.required],
  //     description: ['', Validators.required],
  //     imageUrl: ['', Validators.required]
  //   });
  // }

  async onSubmit() {
    if (this.menuForm.valid) {
      const menuName = this.menuForm.get('menuName')?.value;
      const date = this.menuForm.get('date')?.value;
      // const price = this.menuForm.get('menuPrice')?.value;
      console.log(menuName, date);
      try {
        await this.menuService.createMenu(menuName, date, []);
      } catch (error: any) {
        console.log(error);
        const errorResponse = error.error as IUserResponse;
        const { status, title, message } = errorResponse;
        console.error('Error:', 'Status:', status, 'Title:', title, 'Message:', message);
      }
    } else {
      console.log('Formulario inválido');
    }
  }

  checkValidation(controlName: string): boolean {
    const control = this.menuForm.get(controlName);
    return control ? control.invalid && control.touched : false;
  }
}