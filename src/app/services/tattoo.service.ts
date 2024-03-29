import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tattoo } from '../models/tattoo';
import { environments } from '../../environments/environments.prod';

@Injectable({
  providedIn: 'root'
})
export class TattooService {

  private url: string = environments.url;

  constructor(private http: HttpClient) { }

  //Mostrar todos los tatuajes
  getTattoos(): Observable<any> {
    return this.http.get(`${this.url}/`);
  }

  //Agregar tatuaje
  addTatto(tattoo: Tattoo): Observable<any> {
    return this.http.post(`${this.url}/`, tattoo);
  }

  // Borrar tatuaje
  deleteTattoo(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  // Actualizar tatuaje
  editTattoo(id: string, tattoo: Tattoo): Observable<any> {
    return this.http.put(`${this.url}/${id}`, tattoo);
  }

  //Obtener tatuaje por id
  getTattooById(id: string): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

}
