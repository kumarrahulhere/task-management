import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"],
})
export class AdminLayoutComponent {
  isTablet: boolean = false;

  constructor(
    private auth: AuthService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.observeBreakpoints();
  }

  observeBreakpoints() {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isTablet = result.matches;
      });
  }

  logout(): void {
    this.auth.logout();
  }
}
