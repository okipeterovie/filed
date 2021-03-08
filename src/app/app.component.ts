import { PaymentService } from './user-add/payment.service';
import { selectUsers } from './state/users.selectors';
import { addUser, retrievedUserList } from './state/users.actions';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { User } from './models/user.model';
import { ToastService } from './bootstrap/toast/ToastService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  user$ = this.store.pipe(select(selectUsers));

  // onAddUser() {
  //   let user: User = {
  //     firstName: 'string1',
  //     lastName: 'string1'
  //   }
  //   this.store.dispatch(addUser({ user }));
  // }


  constructor(
    private store: Store,
    private paymentService: PaymentService,
    private toastService: ToastService,
  ) { }

  ngOnInit() {
    this.paymentService.getInitialUsers()
      .subscribe((response: any) => {
        // return response
        // console.log(response)
        let User = response
        this.store.dispatch(retrievedUserList({ User }))
        this.toastService.showSuccess("Initial State Fectched Successfully!");
      }, (error) => {
        this.toastService.showDanger(error);
      });
  }
}