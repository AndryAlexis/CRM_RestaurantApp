import { Component, inject } from '@angular/core';
import { HeaderDashboardComponent } from '../../../components/dashboard/header-dashboard/header-dashboard.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUserResponse, IUserUpdate } from '../../../interfaces/user.interfaces';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [HeaderDashboardComponent, ReactiveFormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
  userForm: FormGroup;
  private apiService = inject(ApiService);
  private route = inject(ActivatedRoute);
  userId: string = '';

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  async ngOnInit() {
    const params = await firstValueFrom(this.route.params);
    // Recoge el ID del usuario de los parámetros de la URL
    this.userId = params['id'];
  }

  async onSubmit(): Promise<void> {
    if (this.userForm.valid) {
      const userData: IUserUpdate = {
        name: this.userForm.value.nombre,
        surname: this.userForm.value.apellido,
        phone: this.userForm.value.telefono,
        email: this.userForm.value.email,
        password: this.userForm.value.password,
        role: this.userForm.value.role
      };
      try {
        const response = await this.apiService.updateUserAdmin(this.userId, userData); // Envía userData junto con userId
        console.log('Usuario actualizado:', response);
        //Mensaje de éxito
        Swal.fire({
          icon: 'success',
          title: 'El usuario se ha actualizado correctamente',
          confirmButtonText: 'Aceptar'
        });
      } catch (error: any) {
        const errorResponse = error.error as IUserResponse;
        const { status, title, message } = errorResponse;
        console.error('Error:', 'Status:', status, 'Title:', title, 'Message:', message);
        //Mensaje de error
        Swal.fire({
          icon: 'error',
          title: 'Ha ocurrido un error al actualizar el usuario.',
          confirmButtonText: 'Aceptar'
        });
      }
    }
  }
}
