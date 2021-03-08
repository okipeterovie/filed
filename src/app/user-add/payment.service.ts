import { User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  user: any;
  users: User;
  constructor(private http: HttpClient) { }

  getInitialUsers(): Observable<any> {
    return this.http.get('https://localhost:2423/users')
  }

  addUser(request: any): Observable<any> {
    let user: User = {
      firstName: request.firstName,
      lastName: request.lastName,
      email: request.email,
      phoneNumberCvv: request.phoneNumberCvv,
      monthlyAdvertisingBudget: request.monthlyAdvertisingBudget
    }

    return this.http.post('https://localhost:2423/users/register', user)
  }
}