import { Component , OnInit} from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { SProyectoService } from '../../service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proy: Proyecto[] = [];

  constructor(private sProyecto: SProyectoService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    this.isLogged = this.tokenService.getToken() ? true : false;
  }

  cargarProyecto(): void {
    this.sProyecto.lista().subscribe(data => { this.proy = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sProyecto.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("No se pudo borrar el proyecto");
        }
      )
    }
  }
}
