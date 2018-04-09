import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from "./login/login.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full',
  },
  { path: 'accueil', component: HomeComponent, data: { title: 'Accueil' }},
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes/* , { preloadingStrategy: PreloadAllModules } */)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
