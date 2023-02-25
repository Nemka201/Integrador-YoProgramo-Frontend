import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/Persona/'
  constructor(private hhtp:HttpClient) { }
  public getPersona(): Observable<persona>{
    return this.hhtp.get<persona>(this.URL+"traer/perfil")
  }
}
