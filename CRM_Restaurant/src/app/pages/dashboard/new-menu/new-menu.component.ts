import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-menu',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-menu.component.html',
  styleUrls: ['./new-menu.component.css']
})
export class NewMenuComponent {
  menuForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.menuForm = this.fb.group({
      menuName: ['', Validators.required],
      date: ['', Validators.required],
      menuPrice: ['', [Validators.required, Validators.min(1)]],
      mainDishes: this.fb.array(this.createDishArray()),
      secondDishes: this.fb.array(this.createDishArray()),
      desserts: this.fb.array(this.createDishArray())
    });
  }

  createDishArray(): FormGroup[] {
    return [
      this.createDish(),
      this.createDish(),
      this.createDish(),
      this.createDish()
    ];
  }

  createDish(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.menuForm.valid) {
      console.log(this.menuForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }

  checkValidation(controlName: string): boolean {
    const control = this.menuForm.get(controlName);
    return control ? control.invalid && control.touched : false;
  }
}