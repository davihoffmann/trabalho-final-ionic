import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    login(email: string, password: string): Observable<boolean> {
        return this.http.post<{acessToken: string}>('http://173.82.104.22:5000/users/authenticate', {email: email, password: password})
            .pipe(
                map(result => {
                    localStorage.setItem('access_token', result.acessToken);
                    return true;
                })
            );
    }

    logout() {
        localStorage.removeItem('access_token');
    }

    public get loggedIn(): boolean {
        return (localStorage.getItem('access_token') !== null);
    }
}