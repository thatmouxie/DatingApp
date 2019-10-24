import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  title: string = 'DatingApp';
constructor() { }

  confirm(message: string, okCallback: () => any) {
    alertify.confirm(this.title, message, (e: any) => { 
      if (e) {
      okCallback();
      }
    },
    error => {
      this.error(error);
    });
  }

  error(message: string) {
    alertify.error(message);
  }

  success(message: string) {
    alertify.success(message);
  }
  
  warning(message: string) {
    alertify.warning(message);
  }

  message(message: string) {
    alertify.message(message);
  }
}
