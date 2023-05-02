import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../models/login-usuario';
import { JwtDto } from '../models/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'http://localhost:8080/auth'

  constructor(private HttpClient: HttpClient) { }
  public Nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.HttpClient.post<any>(this.authURL + 'nuevo',nuevoUsuario)
  }
  public Login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.HttpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }
}
