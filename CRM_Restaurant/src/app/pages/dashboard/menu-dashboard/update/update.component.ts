import { Component } from '@angular/core';

interface Menu {
  date: string;
  price: number;
  starters: string[];
  mains: string[];
  desserts: string[];
}

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [],
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  menu: Menu = {
    date: '',
    price: 0,
    starters: [''],
    mains: [''],
    desserts: ['']
  };

  cancel(): void {
    // Lógica para cancelar
  }

  saveMenu(): void {
    // Lógica para guardar el menú
    console.log(this.menu);
  }
}
