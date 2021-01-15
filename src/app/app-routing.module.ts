import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent as YearStartForm } from './components/forms-component/forms-component.component';
import { LoginComponent } from './components/login-component/login-component.component';

const routes: Routes = [
  {path: '' , component: LoginComponent , pathMatch: 'full'},
  { path: 'forms/start/:hash', component: YearStartForm, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
