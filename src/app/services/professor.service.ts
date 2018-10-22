import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProfessorService {

    currentProfessor: any;

    constructor(private http: HttpClient) { }

    getProfessores(url) {
        return this.http.get(url);
    }

    getProfessoresById(url, id: string): Observable<any> {
        return this.http.get(url + id)
            .pipe(
                map(result => {
                    return result;
                })
            );
    }
}
