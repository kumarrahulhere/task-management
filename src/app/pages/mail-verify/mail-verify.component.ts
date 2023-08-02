import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import IRequestStatus from 'src/app/interface/IRequestStatus';
import { AuthHttpService } from 'src/app/services/api/auth-http.service';

@Component({
  selector: 'app-mail-verify',
  templateUrl: './mail-verify.component.html',
  styleUrls: ['./mail-verify.component.scss'],
})
export class MailVerifyComponent implements OnInit {
  token!: string | null;
  verifyStatus: IRequestStatus = {
    loading: false,
    success: null,
  };

  constructor(
    private route: ActivatedRoute,
    private authHttp: AuthHttpService
  ) {}

  ngOnInit() {
    if (this.route.snapshot.queryParamMap.has('token')) {
      this.token = this.route.snapshot.queryParamMap.get('token');
      this.verifyMail();
    }
  }

  async verifyMail() {
    try {
      this.verifyStatus.loading = true;
      let response = await this.authHttp.verifyMail(this.token!);
      this.verifyStatus.loading = false;
      this.verifyStatus = response;
    } catch (error: any) {
      this.verifyStatus.loading = false;
      this.verifyStatus = error.error;
    }
    console.log(this.verifyStatus);
  }
}
