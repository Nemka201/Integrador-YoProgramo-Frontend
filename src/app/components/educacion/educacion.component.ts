import { Component , OnInit} from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { SEducacionService } from 'src/app/service/educacion.service';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  educacion: Educacion[] = [];
  isLogged: boolean = false;

  constructor(private educacionS:SEducacionService, private tokenService:TokenService){}
  ngOnInit(): void {
    this.cargarEducacion();
    this.isLogged = this.tokenService.getToken() ? true : false;
  }
  cargarEducacion():void{
    this.educacionS.lista().subscribe(
      data => {this.educacion = data}
    )
  }
  delete(id?:number){
    if (id!=undefined){
      this.educacionS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        },
        err => {alert("No se pudo eliminar");}
      )
    }
  }
}
