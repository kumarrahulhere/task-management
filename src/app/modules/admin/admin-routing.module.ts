import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminLayoutComponent } from "./pages/admin-layout/admin-layout.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { TaskCreateComponent } from "./pages/task-create/task-create.component";
import { TaskListComponent } from "./pages/task-list/task-list.component";
import { TaskComponent } from "./pages/task/task.component";

const routes: Routes = [
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "create-task", component: TaskCreateComponent },
      { path: "task-list", component: TaskListComponent },
      { path: "task/:taskid", component: TaskComponent },
      { path: "", redirectTo: "/admin/dashboard", pathMatch: "full" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
