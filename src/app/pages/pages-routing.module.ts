import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
    {
        path: '', component: NavbarComponent,
        children: [
            // { path: '**', redirectTo: 'home', pathMatch: 'full'},
            // { path: 'home', loadChildren: () => import('../home/home.module').then(modulo => modulo.HomeModule) },
            { path: "home", component: IndexComponent },
            { path: "profile", component: ProfilepageComponent },
            { path: "landing", component: LandingpageComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
