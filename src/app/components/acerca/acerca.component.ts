import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit{
  persona:persona = new persona("","","");
  constructor(public personaService: PersonaService) {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }
  ngOnInit(): void{}
}
