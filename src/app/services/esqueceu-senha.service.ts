import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EsqueceuSenhaService {

    constructor(private http: HttpClient) { }

    esqueceuSenha(email: string): Observable<boolean> {
        const params = new HttpParams().set('email', email);
        return this.http.get('http://173.82.104.22:5000/users?', {params})
            .pipe(
                map(result => {
                    return true;
                    console.log(result);
                    console.log(params.toString());
                })
            );
    }
}
