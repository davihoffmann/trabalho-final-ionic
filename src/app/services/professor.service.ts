import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})
export class ProfessorService {

    currentProfessor: any;

    constructor(private http: HttpClient) { }

    getProfessores(url) {
        return this.http.get(`${API_URL}${url}`);
    }

    getProfessoresById(url, id: string): Observable<any> {
        return this.http.get(`${API_URL}${url}/${id}`)
            .pipe(
                map(result => {
                    return result;
                })
            );
    }

    saveProfessor(url: string, name: string, dataNascimento: string, curriculum: string, status: boolean,
                  foto: string): Observable<boolean> {
        return this.http.post(`${API_URL}${url}`,
            {name: name, birthDate: dataNascimento, curriculum: curriculum, status: status, imagem: foto})
            .pipe(
                map(result => {
                    return true;
                })
            );
    }

    updateProfessor(url: string, id: string, name: string, dataNascimento: string, curriculum: string, status: boolean,
                    foto: string): Observable<boolean> {
        return this.http.put(`${API_URL}${url}/${id}`,
            {name: name, birthDate: dataNascimento, curriculum: curriculum, status: status, imagem: foto})
            .pipe(
                map(result => {
                    this.currentProfessor = null;
                    return true;
                })
            );
    }

    deleteProfessor(url: string, id: number): Observable<boolean> {
        return this.http.delete(`${API_URL}${url}/${id}`)
            .pipe(
                map(result => {
                    return true;
                })
            );
    }
}
