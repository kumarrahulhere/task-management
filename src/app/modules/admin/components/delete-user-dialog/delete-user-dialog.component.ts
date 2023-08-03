import { Component, Inject, Optional } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import IRequestStatus from "src/app/interface/IRequestStatus";
import { UserHttpService } from "src/app/services/api/admin/user-http.service";

@Component({
  selector: "app-delete-user-dialog",
  templateUrl: "./delete-user-dialog.component.html",
  styleUrls: ["./delete-user-dialog.component.scss"],
})
export class DeleteUserDialogComponent {
  deleteStatus: IRequestStatus = {
    loading: false,
    success: null,
  };

  constructor(
    public dialogRef: MatDialogRef<DeleteUserDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private userHttpService: UserHttpService
  ) {}

  async deleteUser() {
    try {
      this.deleteStatus.loading = true;
      let response = await this.userHttpService.deleteUser(this.data._id);
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
