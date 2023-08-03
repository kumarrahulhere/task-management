import { Component, ViewChild } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { DeleteTaskDialogComponent } from "../../components/delete-task-dialog/delete-task-dialog.component";
import IRequestStatus from "src/app/interface/IRequestStatus";
import { TaskHttpService } from "src/app/services/api/admin/task.http.service";
import Constant from "src/app/config/Constant";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"],
})
export class TaskListComponent {
  displayedColumns: string[] = ["name", "user", "status", "action"];
  dataSource!: MatTableDataSource<any>;
  taskStatus: IRequestStatus = {
    loading: false,
    success: null,
  };
  TaskState: any = Constant.TASK_STATE;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private taskHttpService: TaskHttpService
  ) {}
  statusFilter: string = "all";

  ngOnInit() {
    this.dataSource = new MatTableDataSource([{}]);
    this.getTasks();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  async getTasks() {
    this.taskStatus.loading = true;
    try {
      let response = await this.taskHttpService.getAllTask();
      this.taskStatus.loading = false;
      this.taskStatus = response;
      this.dataSource = new MatTableDataSource(response.tasks);
      this.ngAfterViewInit();
    } catch (error: any) {
      this.taskStatus.loading = false;
      this.taskStatus = error.error;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteDialog(row: any) {
    const dialogRef: MatDialogRef<DeleteTaskDialogComponent> = this.dialog.open(
      DeleteTaskDialogComponent,
      { data: row }
    );
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === true) this.getTasks();
    });
  }
}
