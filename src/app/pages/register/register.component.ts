import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import IRequestStatus from 'src/app/interface/IRequestStatus';
import { AuthHttpService } from 'src/app/services/api/auth-http.service';
import { AuthService } from 'src/app/services/auth.service';
import { CheckFormDataService } from 'src/app/services/check-form-data.service';
import { checkFormData, passwordValidator } from 'src/app/utils/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private auth: AuthService,
    private router: Router,
    private authHttp: AuthHttpService,
    private fb: FormBuilder,
    public checkFormData: CheckFormDataService
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordValidator]],
      confirm_password: ['', [Validators.required]],
    });
  }

  registerStatus: IRequestStatus = {
    loading: false,
    success: null,
  };

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['user']);
    }
    this.checkFormData.config(this.registerForm, this.registerStatus);
  }

  async onSubmit() {
    if (!this.registerForm.valid) {
      this.registerForm.markAllAsTouched();
      return false;
    }
    try {
      this.registerStatus.loading = true;
      let response = await this.authHttp.register(this.registerForm.value);
      this.registerStatus = response;
      this.registerStatus.loading = false;
      this.checkFormData.config(this.registerForm, this.registerStatus);
      this.registerForm.markAllAsTouched();
      if (!response.user?.verified) {
        this.router.navigate(['mail-verify']);
      }
    } catch (error: any) {
      this.registerStatus = error.error;
      this.registerStatus.loading = false;
      this.checkFormData.config(this.registerForm, this.registerStatus);
      this.registerForm.markAllAsTouched();
    }
    return true;
  }
}
