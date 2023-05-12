import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit{
  isLogged: boolean = false;
  persona:persona = new persona("","","");
  constructor(public personaService: PersonaService, private tokenService: TokenService){}
  ngOnInit(): void{
    this.cargarPersona();
    this.isLogged = this.tokenService.getToken() ? true : false;

  }
  cargarPersona(){
    this.personaService.traer(1).subscribe(data =>
      {
        this.persona = data;
      })
  }
}
