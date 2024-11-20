import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderDashboardComponent } from '../../../components/dashboard/header-dashboard/header-dashboard.component';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [HeaderDashboardComponent],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
  userId: string;

  constructor(private route: ActivatedRoute) {
    this.userId = this.route.snapshot.paramMap.get('id') || '';
  }
}
