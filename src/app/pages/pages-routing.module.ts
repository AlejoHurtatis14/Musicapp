import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { RegisterpageComponent } from './auth/registerpage/registerpage.component';
import { LandingpageComponent } from './auth/landingpage/landingpage.component';
import { ProfilepageComponent } from './auth/profilepage/profilepage.component';
import { LoginpageComponent } from './auth/loginpage/loginpage.component';

const routes: Routes = [
    {
        path: '', component: NavbarComponent,
        children: [
            // { path: '**', redirectTo: 'home', pathMatch: 'full'},
            // { path: 'home', loadChildren: () => import('../home/home.module').then(modulo => modulo.HomeModule) },
            { path: "home", component: IndexComponent },
            { path: "profile", component: ProfilepageComponent },
            { path: "register", component: RegisterpageComponent },
            { path: "login", component: LoginpageComponent },
            { path: "landing", component: LandingpageComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
