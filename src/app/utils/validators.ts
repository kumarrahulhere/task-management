import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  // Password must contain at least 1 number, 1 special character, 1 lowercase letter, and 1 uppercase letter
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const valid = passwordRegex.test(control.value);
  return valid ? null : { invalidPassword: true };
}

export function checkFormData(
  form: any,
  requestStatus: any,
  input: string,
  msg: boolean = false
) {
  const control = form.get(input);
  if (msg) {
    if (control?.invalid) {
      return `${input} is required`;
    } else {
      return requestStatus.errors?.['email'] || `${input} is required`;
    }
  } else {
    const emailServerErrors = requestStatus.errors?.['email'];
    const isEmailInvalid =
      control?.invalid && (control.dirty || control.touched);
    return emailServerErrors || isEmailInvalid;
  }
}
