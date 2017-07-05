import { FormControl } from '@angular/forms';

export class BasicValidators {

  static email (control: FormControl) {

    const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return EMAIL_REGEXP.test(control.value) ? null : {
      validateEmail: {
        valid: false
      }
    };
  }

  static phone (control: FormControl) {

    const PHONE_REGEXP = /^\d{9}$/;

    return !control.value || PHONE_REGEXP.test(control.value) ? null : {
      validatePhone: {
        valid: false
      }
    };
  }
}
