import { Component , OnInit } from '@angular/core';
import { SkillService } from '../../service/skill.service';
import { TokenService } from '../../service/token.service';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit{
  skill : Skill[] = [];
  isLogged: boolean = false;

  ngOnInit(): void {
    this.cargarSkills();
    this.isLogged = this.tokenService.getToken() ? true : false;

  }
  constructor(private skillService:SkillService,private tokenService:TokenService){}
  cargarSkills(): void{
    this.skillService.lista().subscribe(
      data => {
        this.skill = data;
      }
    )
  }
  delete(id?: number){
    if(id != undefined){
      this.skillService.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("Error al eliminar la habilidad");
        }
      )
    }
  }
}
