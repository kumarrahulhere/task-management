import { Component, Inject, Optional } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import IRequestStatus from "src/app/interface/IRequestStatus";
import { UserHttpService } from "src/app/services/api/admin/user-http.service";

@Component({
  selector: "app-user-verify-dialog",
  templateUrl: "./user-verify-dialog.component.html",
  styleUrls: ["./user-verify-dialog.component.scss"],
})
export class UserVerifyDialogComponent {
  toggleStatus: IRequestStatus = {
    loading: false,
    success: null,
  };

  constructor(
    public dialogRef: MatDialogRef<UserVerifyDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private userHttpService: UserHttpService
  ) {}

  async toggleVerification() {
    try {
      this.toggleStatus.loading = true;
      let response = await this.userHttpService.toggleUserVerification({
        id: this.data._id,
        verified: !this.data.verified,
      });
      this.toggleStatus.loading = false;
      this.toggleStatus = response;
      if (response.success) this.dialogRef.close(true);
    } catch (error: any) {
      this.toggleStatus.loading = false;
      this.toggleStatus = error.error;
      this.dialogRef.close(null);
    }
  }
}
