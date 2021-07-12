import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actu } from '../models/Actu.model';


const baseUrl = 'http://localhost:8080/api/Actus';

@Injectable({
  providedIn: 'root'
})
export class ActuService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Actu[]> {
    return this.http.get<Actu[]>(baseUrl);
  }

  getAllp(params: any): Observable<any> {
    return this.http.get(baseUrl, { params });
  }

  get(id: any): Observable<Actu> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitre(titre: any): Observable<Actu[]> {
    return this.http.get<Actu[]>(`${baseUrl}?titre=${titre}`);
  }
}