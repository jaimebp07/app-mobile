import { NgModule } from '@angular/core';
import { LoginComponent } from './core/auth/login/login.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'login', component: LoginComponent }];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
