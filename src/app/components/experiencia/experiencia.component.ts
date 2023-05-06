import { Component, OnInit} from '@angular/core';
import { SExperienciaService } from '../../service/experiencia.service';
import { TokenService } from '../../service/token.service';
import { Experiencia } from 'src/app/models/experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: Experiencia[] = [];
  constructor(private SExperienciaService : SExperienciaService, private tokenService: TokenService ){}
  isLogged: boolean = false;
  ngOnInit(): void {
    this.cargarExperiencia();
    this.isLogged = this.tokenService.getToken() ? true : false;
  }

  cargarExperiencia() :void{
    this.SExperienciaService.lista().subscribe(data => {this.experiencia = data;})
  }
  delete (id?:number):void{
    if (id != undefined){
      this.SExperienciaService.delete(id).subscribe(
        data => {this.cargarExperiencia();},
        err => {alert("No se pudo eliminar la experiencia");}
      )
    }
  }
}
