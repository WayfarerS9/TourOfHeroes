import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    constructor() { }

    async getToken(name: string, email: string) {

        let candidate: {name: string, email: string} = {
            name: name,
            email: email
        }

        let response = await fetch('http://localhost:3000/auth', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(candidate)
        });

        let result = await response.json();

        if(result.errorMessage === 'Authorisation required!') {
            alert('The username and email pair does not match')
        } else {
            window.localStorage.setItem('auth_token', result.token);
        }
    }

    isTokenExistAndAct(): boolean {
        let token: string | null = window.localStorage.getItem('auth_token');
        if(!token) {
            return false;
        }

        let tokenCont = this.getDecodedAccessToken(token);
        let timeOfTokenActing = tokenCont.exp;
        let nowTime = new Date().getTime() / 1000

        if (timeOfTokenActing > nowTime) {
            return true
        } else {
            return false
        }
    }

    getDecodedAccessToken(token: string): any {
        return jwt_decode(token);
    }
}
