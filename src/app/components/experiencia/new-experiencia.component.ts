import { Component, OnInit} from '@angular/core';
import { SExperienciaService } from '../../service/experiencia.service';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent {
  nombreE: string = '';
  descripcionE: string = '';
  desdehastaE: string = '';
  constructor(private sExperienciaService: SExperienciaService, private router:Router) { }

  ngOnInit():void{

  }
  onCreate():void{
    const experiencia = new Experiencia(this.nombreE,this.descripcionE,this.desdehastaE);
    this.sExperienciaService.save(experiencia).subscribe(data => {
      alert("Experiencia añanadida");
      this.router.navigate(['']);
    }, err =>{alert("Falló"); this.router.navigate(['']);})
  }
}
