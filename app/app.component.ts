import { Component } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { IToastButton } from "./custom-toast/custom-toast.component";

class myToaster extends ToastrService {}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular 8";
  toastRef;
  toastButtons: IToastButton[] = [
    {
      id: "1",
      title: "view jobs 1"
    },
    {
      id: "2",
      title: "view jobs 2"
    }
  ];

  constructor(private toastr: ToastrService) {}

  showToast = () => {
    this.toastRef = this.toastr
      .show("Test", null, {
        disableTimeOut: false,
        tapToDismiss: false,
        toastClass: "toast border-red",
        closeButton: false,
        positionClass: "bottom-left",
        // @ts-ignore
        buttons: this.toastButtons
      })
      .onAction.subscribe(x => {
        alert(`${x.title} is pressed`);
        console.log(x);
      });
  };
}
