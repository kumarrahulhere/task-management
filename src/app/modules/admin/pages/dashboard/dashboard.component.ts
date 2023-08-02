import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { UserVerifyDialogComponent } from "../../components/user-verify-dialog/user-verify-dialog.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ["name", "status", "action"];
  dataSource!: MatTableDataSource<any>;

  data = [
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    { name: "John Doe", status: "pending" },
    { name: "Jane Smith", status: "ready" },
    // Add more data rows as needed
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) {}

  statusFilter: string = "all";

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; // <-- STEP (4)
    this.dataSource.sort = this.sort;
  }

  openDialog() {
    this.dialog.open(UserVerifyDialogComponent);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onActionClick(row: any) {
    console.log("Action clicked for:", row);
  }
}
