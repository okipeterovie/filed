import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { usersReducer } from './state/user.reducer';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';
import { AppRoutingModule } from './app-routing.module';
import { fakeBackendProvider } from './helpers/fake-backend.interceptor';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { TopMenuComponent } from './layouts/top-menu/top-menu.component';
import { FooterMenuComponent } from './layouts/footer-menu/footer-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ users: usersReducer }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BootstrapModule,
    FormsModule,
    NgbModule,
  ],
  declarations: [
    AppComponent,
    UserAddComponent,
    UserListComponent,
    TopMenuComponent,
    FooterMenuComponent
  ],
  bootstrap: [AppComponent],
  providers: [fakeBackendProvider]
})
export class AppModule { }