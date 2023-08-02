import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { ViewChild } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  constructor(private auth: AuthService) {}
  logout(): void {
    this.auth.logout();
  }
}
