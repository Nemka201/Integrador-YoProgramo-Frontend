import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../models/persona.model';
import { environment } from 'src/environments/environment.prod';

// Servicio de Persona

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //URL = 'http://localhost:8080/Persona/'
  URL = 'https://backendnemka201.onrender.com/Persona'
  constructor(private httpClient:HttpClient) { }
  public lista(): Observable<persona[]> {
    return this.httpClient.get<persona[]>(this.URL + '/lista');
  }

  public detail(id: number): Observable<persona> {
    return this.httpClient.get<persona>(this.URL + `/detail/${id}`);
  }
  public traer(): Observable<persona> {
    return this.httpClient.get<persona>(this.URL + `/traer/perfil`);
  }

  /*public save(persona: persona): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', persona);
  }*/

  public update(id: number, persona: persona): Observable<any> {
    return this.httpClient.put<any>(this.URL + `/editar/${id}`, persona);
  }

  /*public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }*/
}
