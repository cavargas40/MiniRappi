import { Injectable } from '@angular/core';

declare var Materialize: any;

@Injectable()
export class ToastService {
  constructor() { }

  //send notificacions to users.
  toast(text: string, duration: number = 3000, style: string = "") {
    Materialize.toast(text, duration, style);
  }
}
