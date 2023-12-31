import { Component, Inject, Optional } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import IRequestStatus from "src/app/interface/IRequestStatus";
import { TaskHttpService } from "src/app/services/api/admin/task.http.service";

@Component({
  selector: "app-delete-task-dialog",
  templateUrl: "./delete-task-dialog.component.html",
  styleUrls: ["./delete-task-dialog.component.scss"],
})
export class DeleteTaskDialogComponent {
  deleteStatus: IRequestStatus = {
    loading: false,
    success: null,
  };

  constructor(
    public dialogRef: MatDialogRef<DeleteTaskDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private taskHttpService: TaskHttpService
  ) {}

  async deleteTask() {
    try {
      this.deleteStatus.loading = true;
      let response = await this.taskHttpService.deleteTask(this.data._id);
      this.deleteStatus.loading = false;
      this.deleteStatus = response;
      if (response.success) this.dialogRef.close(true);
    } catch (error: any) {
      this.deleteStatus.loading = false;
      this.deleteStatus = error.error;
      this.dialogRef.close(null);
    }
  }
}
