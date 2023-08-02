import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import IRequestStatus from "src/app/interface/IRequestStatus";
import { CheckFormDataService } from "src/app/services/check-form-data.service";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: "app-task-create",
  templateUrl: "./task-create.component.html",
  styleUrls: ["./task-create.component.scss"],
})
export class TaskCreateComponent implements OnInit {
  taskForm: FormGroup;
  users: string[] = ["Alabama", "Alaska", "Arizona"];
  selectedUser = this.users;
  public Editor = ClassicEditor;
  public configEditor = { placeholder: "Type the content here!" };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public checkFormData: CheckFormDataService
  ) {
    this.taskForm = this.fb.group({
      user: ["", [Validators.required]],
      title: ["", [Validators.required]],
      discription: ["", [Validators.required]],
    });
  }

  taskStatus: IRequestStatus = {
    loading: false,
    success: null,
  };

  ngOnInit(): void {
    this.checkFormData.config(this.taskForm, this.taskStatus);
  }

  onKey(event: any) {
    this.selectedUser = this.search(event.target.value);
  }
  search(value: string) {
    let filter = value.toLowerCase();
    return this.users.filter((option) =>
      option.toLowerCase().startsWith(filter)
    );
  }

  onSubmit() {}
}
