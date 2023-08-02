import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserLayoutComponent } from './pages/user-layout/user-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    UserLayoutComponent,
    DashboardComponent,
    UpdateUserComponent,
    ChangePasswordComponent,
  ],
  imports: [CommonModule, UserRoutingModule, MdbTabsModule, MdbFormsModule],
})
export class UserModule {}
