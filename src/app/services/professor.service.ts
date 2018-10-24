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

    saveProfessor(url: string, name: string, dataNascimento: string, curriculum: string, status: boolean,
                  foto: string): Observable<boolean> {
        return this.http.post(url,
            {name: name, birthDate: dataNascimento, curriculum: curriculum, status: status, imagem: foto})
            .pipe(
                map(result => {
                    return true;
                })
            );
    }

    updateProfessor(url: string, id: string, name: string, dataNascimento: string, curriculum: string, status: boolean,
                    foto: string): Observable<boolean> {
        return this.http.put(url + id,
            {name: name, birthDate: dataNascimento, curriculum: curriculum, status: status, imagem: foto})
            .pipe(
                map(result => {
                    return true;
                })
            );
    }

    deleteProfessor(url: string, id: number): Observable<boolean> {
        return this.http.delete(url + id)
            .pipe(
                map(result => {
                    return true;
                })
            );
    }
}
