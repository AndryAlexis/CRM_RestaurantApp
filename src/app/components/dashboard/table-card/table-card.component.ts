import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { TablesService } from '../../../services/tables.service';

@Component({
  selector: 'app-table-card',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './table-card.component.html',
  styleUrl: './table-card.component.css'
})
export class TableCardComponent {
  @Input() table: any;
  @Output() deleteEvent: EventEmitter<string> = new EventEmitter();
    
  form: FormGroup;
  private tableService = inject(TablesService)

  constructor() {
    this.form = new FormGroup({
      capacity: new FormControl(this.table?.capacity, [Validators.required, Validators.min(1)]),
    }, [])
  }

  async ngSubmit() {
    const id = this.table?.id
    const capacity = this.form.value.capacity

    try {
      // Submit reservation and reset form
      await this.tableService.updateTableCapacity(id, capacity);

      Swal.fire({
        title: 'Mesa editada',
        icon: 'success',
      })
    } catch (error: any) {

      Swal.fire({
        title: "Error",
        text: error.error.message,
        icon: "error"
      })
    }
  }

  async borrar() {
    const id = this.table?.id

    try {
      // Submit reservation and reset form
      await this.tableService.deleteTable(id);

      Swal.fire({
        title: 'Mesa borrada',
        icon: 'success',
      })

      this.deleteEvent.emit("true")
      
    } catch (error: any) {

      Swal.fire({
        title: "Error",
        text: error.error.message,
        icon: "error"
      })
    }
  }
}
