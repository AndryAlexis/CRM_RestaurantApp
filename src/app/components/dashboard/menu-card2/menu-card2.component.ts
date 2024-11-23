import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-card2',
  standalone: true,
  imports: [],
  templateUrl: './menu-card2.component.html',
  styleUrl: './menu-card2.component.css'
})
export class MenuCard2Component {

  @Input() dish: any = {};

}
