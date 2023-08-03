import { Injectable } from "@angular/core";
import IRequestStatus from "../interface/IRequestStatus";

@Injectable({
  providedIn: "root",
})
export class CheckFormDataService {
  form: any;
  requestStatus!: IRequestStatus;
  constructor() {}

  config(form: any, requestStatus: IRequestStatus) {
    this.form = form;
    this.requestStatus = requestStatus;
  }

  check(input: string) {
    const control = this.form.get(input);
    const inputServerErrors = this.requestStatus.errors?.[input];
    const isInputInvalid =
      control?.invalid && (control.dirty || control.touched);
    return inputServerErrors || isInputInvalid;
  }

  getMessage(input: string, msg: string | null = null) {
    const control = this.form.get(input);
    let message = `${input} is required`;
    return this.requestStatus.errors?.[input] ?? message;
  }
}
