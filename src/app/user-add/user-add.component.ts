import { PaymentService } from './payment.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormValue } from '../helpers/FormValue';
import { User } from '../models/user.model';
import { addUser } from '../state/users.actions';
import { ToastService } from '../bootstrap/toast/ToastService';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private store: Store,
    private router: Router,
    private formBuilder: FormBuilder,
    private paymentService: PaymentService,
    private toastService: ToastService,

  ) { this.initalizeForm(); }

  initalizeForm() {
    return this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumberCvv: ['', Validators.required],
      monthlyAdvertisingBudget: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onAddUser() {
    let request = FormValue.get(this.registrationForm, true);
    let req: User = {
      firstName: request.firstName,
      lastName: request.lastName,
      email: request.email,
      phoneNumberCvv: request.phoneNumberCvv,
      monthlyAdvertisingBudget: request.monthlyAdvertisingBudget
    }

    this.paymentService.addUser(req)
      .subscribe((response: any) => {
        let user = response
        this.store.dispatch(addUser({ user }));
        this.toastService.showSuccess("Added successfully!");
        this.router.navigateByUrl('/');

      }, (error) => {
        this.toastService.showDanger(error);
      });
  }

  redirect(path): void {
    this.router.navigateByUrl(path);
  }

}
