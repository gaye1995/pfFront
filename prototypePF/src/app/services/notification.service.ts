import { Injectable } from '@angular/core';  
import { ToastrService } from 'ngx-toastr';
export enum ToasterPosition {
  topRight = 'toast-top-right',
  topLeft = 'toast-top-left',
  bottomRight = 'toast-bottom-right',
  bottomLeft= 'toast-bottom-left',
  // Other positions you would like
}
  
@Injectable({
  providedIn: 'root'
})

export class NotificationService {

  constructor(private toastr: ToastrService) { }
  
  showSuccess(message: string , title: string, positionClass: ToasterPosition ){
      this.toastr.success(message, title, {
        timeOut : 3000,
        progressAnimation: "increasing",
        positionClass: 'toast-top-right'
      } )
  }
  
  showError(message: string, title: string ){
      this.toastr.error(message, title)
  }
  
  showInfo(message: string , title: string ){
      this.toastr.info(message, title)
  }
  
  showWarning(message: string , title: string ){
      this.toastr.warning(message, title)
  }
}
