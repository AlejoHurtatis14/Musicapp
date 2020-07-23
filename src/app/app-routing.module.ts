import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { LoggedInGuard } from './shared/services/guards/guard-logged-in.guard';
import { UnloggedGuard } from './shared/services/guards/guard-unlogged.guard';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./pages/pages.module').then(modulo => modulo.PagesModule),
    canActivate: [UnloggedGuard]
  },
  {
    path: "auth",
    loadChildren: () => import('./auth/auth.module').then(modulo => modulo.AuthModule),
    canActivate: [LoggedInGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: []
})
export class AppRoutingModule { }
