import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UsersalaryComponent } from './usersalary/usersalary.component';

import {
  DxDataGridModule,
  DxCheckBoxModule,
  DxSelectBoxModule,
} from 'devextreme-angular';

@NgModule({
  declarations: [
    DashboardComponent,
    UserNavComponent,
    UserlistComponent,
    UsersalaryComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    DxDataGridModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
  ],
})
export class UserModule {}
