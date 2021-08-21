import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    private user: User;
    authChange = new Subject<boolean>();

    constructor(private route: Router) {}
    
    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        }
        this.authSuccessfully();
    }
    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        }
        this.authSuccessfully();
    }
    logout() {
        this.user = null;
        this.authChange.next(false);
        this.route.navigate(['/login']);
    }
    getUser() {
        return { ...this.user }
    }
    isAuth() {
        return this.user != null;
    }
    private authSuccessfully() {
        this.authChange.next(true);
        this.route.navigate(['/training']);
    }
}


