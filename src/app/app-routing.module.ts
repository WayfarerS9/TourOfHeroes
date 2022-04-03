import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { LoginComponent } from './login/login.component';
import { HeroesGuardGuard } from './heroes-guard.guard';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'heroes', component: HeroesComponent, canActivate: [HeroesGuardGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [HeroesGuardGuard] },
    { path: 'detail/:id', component: HeroDetailComponent, canActivate: [HeroesGuardGuard] },
    { path: 'detail/new', component: HeroDetailComponent, canActivate: [HeroesGuardGuard] },
    { path: '', redirectTo: '/heroes', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
