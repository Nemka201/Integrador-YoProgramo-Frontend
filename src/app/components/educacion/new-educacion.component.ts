import { Component, OnInit} from '@angular/core';
import { SEducacionService } from 'src/app/service/educacion.service';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit{
  nombreE:string = '';
  descripcionE:string = '';
  desdehastaE:string = '';
  constructor(private sEducacionService: SEducacionService,private router:Router){}
  ngOnInit(): void {}
  onCreate():void{
    const educacion = new Educacion(this.nombreE,this.descripcionE,this.desdehastaE);
    this.sEducacionService.save(educacion).subscribe(
      data => {
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Error al añadir Educación");
        this.router.navigate(['']);
      }
    )
  }
}
