import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class EsqueceuSenhaService {

    constructor(private http: HttpClient) { }

    esqueceuSenha(email: string): Observable<boolean> {
        const params = new HttpParams().set('email', email);
        return this.http.get(`${API_URL}` + '/users?', {params})
            .pipe(
                map(result => {
                    return true;
                    console.log(result);
                    console.log(params.toString());
                })
            );
    }
}
