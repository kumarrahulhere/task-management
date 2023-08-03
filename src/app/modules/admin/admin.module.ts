import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { AdminRoutingModule } from "./admin-routing.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AdminLayoutComponent } from "./pages/admin-layout/admin-layout.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";
import { MdbFormsModule } from "mdb-angular-ui-kit/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { UserVerifyDialogComponent } from "./components/user-verify-dialog/user-verify-dialog.component";
import { TaskCreateComponent } from "./pages/task-create/task-create.component";
import { TaskListComponent } from "./pages/task-list/task-list.component";
import { DeleteTaskDialogComponent } from "./components/delete-task-dialog/delete-task-dialog.component";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { TaskComponent } from "./pages/task/task.component";
import { MatChipsModule } from "@angular/material/chips";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { DeleteUserDialogComponent } from './components/delete-user-dialog/delete-user-dialog.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    UserVerifyDialogComponent,
    TaskCreateComponent,
    TaskListComponent,
    DeleteTaskDialogComponent,
    TaskComponent,
    DeleteUserDialogComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MdbFormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    CKEditorModule,
    MatChipsModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
})
export class AdminModule {}
