import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users: Array<User>;
  @Output() add = new EventEmitter();

  tablePage: number = 1;
  tablePageSize: number = 5;

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  redirect(path): void {
    this.router.navigateByUrl(path);
  }

}
