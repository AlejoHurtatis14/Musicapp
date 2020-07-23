import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";

import { IndexComponent } from "./index/index.component";
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { PagesRoutingModule } from './pages-routing.module';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    JwBootstrapSwitchNg2Module,
    PagesRoutingModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    AngularFireAuthModule,
  ],
  declarations: [
    IndexComponent,
    ProfilepageComponent,
    LandingpageComponent,
    NavbarComponent
  ],
  exports: [
    IndexComponent,
    ProfilepageComponent,
    LandingpageComponent
  ],
  providers: []
})
export class PagesModule { }
