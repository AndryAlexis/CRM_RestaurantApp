import { Component, inject } from '@angular/core';
import { HeaderDashboardComponent } from '../../../../components/dashboard/header-dashboard/header-dashboard.component';
import { TableCardComponent } from '../../../../components/dashboard/table-card/table-card.component';
import { RouterLink } from '@angular/router';
import { TablesService } from '../../../../services/tables.service';

@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: [HeaderDashboardComponent, TableCardComponent, RouterLink],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.css'
})
export class TableViewComponent {
  tables: any[] = []
  private tablesServices = inject(TablesService)

  constructor() {
    this.loadTables()
  }

  async loadTables() {
    this.tables = await this.tablesServices.getTables()
    console.log(this.tables)
  }

  async reloadData() {
    await this.loadTables()
  }
}
