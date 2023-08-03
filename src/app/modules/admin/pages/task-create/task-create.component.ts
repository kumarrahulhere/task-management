import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import IRequestStatus from "src/app/interface/IRequestStatus";
import { CheckFormDataService } from "src/app/services/check-form-data.service";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { UserHttpService } from "src/app/services/api/admin/user-http.service";
import { TaskHttpService } from "src/app/services/api/admin/task.http.service";

@Component({
  selector: "app-task-create",
  templateUrl: "./task-create.component.html",
  styleUrls: ["./task-create.component.scss"],
})
export class TaskCreateComponent implements OnInit {
  taskForm: FormGroup;
  users: any[] = [];
  selectedUser = this.users;
  public Editor = ClassicEditor;
  public configEditor = { placeholder: "Type the content here!" };
  usersStatus: IRequestStatus = {
    loading: false,
    success: null,
  };
  createTaskStatus: IRequestStatus = {
    loading: false,
    success: null,
  };

  constructor(
    private fb: FormBuilder,
    public checkFormData: CheckFormDataService,
    private userHttpService: UserHttpService,
    private taskHttpService: TaskHttpService
  ) {
    this.taskForm = this.fb.group({
      assignedTo: ["", [Validators.required]],
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.checkFormData.config(this.taskForm, this.createTaskStatus);
    this.getUsers();
  }

  onKey(event: any) {
    this.selectedUser = this.search(event.target.value);
  }
  search(value: string) {
    let filter = value.toLowerCase();
    return this.users.filter((option) =>
      option.name.toLowerCase().startsWith(filter)
    );
  }

  async getUsers() {
    this.usersStatus.loading = true;
    try {
      let response = await this.userHttpService.getUsers();
      this.usersStatus.loading = false;
      this.usersStatus.success = true;
      this.users = response.users;
      this.selectedUser = this.users;
    } catch (error: any) {
      this.usersStatus.loading = false;
      this.usersStatus = error.error;
    }
  }

  async onSubmit() {
    if (!this.taskForm.valid) {
      this.taskForm.markAllAsTouched();
      return false;
    }
    try {
      this.createTaskStatus.loading = true;
      let response = await this.taskHttpService.createTask(this.taskForm.value);
      this.createTaskStatus = response;
      this.createTaskStatus.loading = false;
      this.checkFormData.config(this.taskForm, this.createTaskStatus);
      this.taskForm.reset();
    } catch (error: any) {
      this.createTaskStatus = error.error;
      this.createTaskStatus.loading = false;
      this.checkFormData.config(this.taskForm, this.createTaskStatus);
      this.taskForm.markAllAsTouched();
    }
    return true;
  }
}
