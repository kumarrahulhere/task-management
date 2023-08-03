import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { UserVerifyDialogComponent } from "../../components/user-verify-dialog/user-verify-dialog.component";
import { UserHttpService } from "src/app/services/api/admin/user-http.service";
import IRequestStatus from "src/app/interface/IRequestStatus";
import { DeleteUserDialogComponent } from "../../components/delete-user-dialog/delete-user-dialog.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ["name", "email", "status", "action"];
  dataSource!: MatTableDataSource<any>;
  statusFilter: string = "all";
  usersStatus: IRequestStatus = {
    loading: false,
    success: null,
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private userHttpService: UserHttpService
  ) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource([{}]);
    this.getUsers();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; // <-- STEP (4)
    this.dataSource.sort = this.sort;
  }

  async getUsers() {
    this.usersStatus.loading = true;
    try {
      let response = await this.userHttpService.getUsers();
      this.usersStatus.loading = false;
      this.usersStatus = response;
      this.dataSource = new MatTableDataSource(response.users);
      this.ngAfterViewInit();
    } catch (error: any) {
      this.usersStatus.loading = false;
      this.usersStatus = error.error;
    }
  }

  openDialog(row: any) {
    const dialogRef: MatDialogRef<UserVerifyDialogComponent> = this.dialog.open(
      UserVerifyDialogComponent,
      { data: row }
    );
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === true) this.getUsers();
    });
  }

  deleteDialog(row: any) {
    const dialogRef: MatDialogRef<DeleteUserDialogComponent> = this.dialog.open(
      DeleteUserDialogComponent,
      { data: row }
    );
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === true) this.getUsers();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onActionClick(row: any) {
    // console.log("Action clicked for:", row);
  }
}
