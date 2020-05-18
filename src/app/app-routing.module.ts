import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';


const routes: Routes = [
  { path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  { path: 'login', component: LoginComponent, data: { titulo: 'Login' } },
  { path: 'register', component: RegisterComponent, data: { titulo: 'Registro' } },
  { path: '**', component: NopagefoundComponent, data: { titulo: 'Page not found' } }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
