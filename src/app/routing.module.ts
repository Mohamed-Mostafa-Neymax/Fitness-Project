import { TrainingComponent } from './training/training.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'training', component: TrainingComponent, canActivate: [AuthGuard] }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {}
