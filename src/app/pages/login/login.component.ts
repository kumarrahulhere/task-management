import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import Constant from "src/app/config/Constant";
import IRequestStatus from "src/app/interface/IRequestStatus";
import { AuthHttpService } from "src/app/services/api/auth-http.service";
import { AuthService } from "src/app/services/auth.service";
import { CheckFormDataService } from "src/app/services/check-form-data.service";
import { passwordValidator } from "src/app/utils/validators";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginStatus: IRequestStatus = {
    loading: false,
    success: null,
  };

  constructor(
    private auth: AuthService,
    private router: Router,
    private authHttp: AuthHttpService,
    private fb: FormBuilder,
    public checkFormData: CheckFormDataService
  ) {
    this.loginForm = this.fb.group({
      email: ["rkpassin132@gmail.com", [Validators.required, Validators.email]],
      password: ["hjRDS@6Nh", [Validators.required, passwordValidator]],
    });
  }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(["user"]);
    }
    this.checkFormData.config(this.loginForm, this.loginStatus);
  }

  async onSubmit() {
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      // return false;
    }
    try {
      this.loginStatus.loading = true;
      let response = await this.authHttp.login(this.loginForm.value);
      this.loginStatus = response;
      this.loginStatus.loading = false;
      this.checkFormData.config(this.loginForm, this.loginStatus);
      this.loginForm.markAllAsTouched();
      if (!response.user?.verified) {
        this.router.navigate(["mail-verify"]);
      }
      // set token and redirect to dashboard (user, admin)
      this.auth.setToken(response.token, response.user.role);
      this.router.navigate(["mail-verify"]);
      if (response.user.role === Constant.ROLE.User) {
        this.router.navigate(["user/dashboard"]);
      } else if (response.user.role === Constant.ROLE.Admin) {
        this.router.navigate(["admin/dashboard"]);
      }
    } catch (error: any) {
      this.loginStatus = error.error;
      this.loginStatus.loading = false;
      this.checkFormData.config(this.loginForm, this.loginStatus);
      this.loginForm.markAllAsTouched();
    }
    return true;
  }
}
