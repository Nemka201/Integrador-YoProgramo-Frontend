import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../service/skill.service';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-new-habilidades',
  templateUrl: './new-habilidades.component.html',
  styleUrls: ['./new-habilidades.component.css']
})
export class NewHabilidadesComponent implements OnInit{
  // Declaro e inicializo variables
nombre: string='';
porcentaje: number = 0;
subtitle: string = '';
constructor(private skillService:SkillService, private router:Router){

}
  ngOnInit(): void {

}
onCreate(): void{
  const skill = new Skill(this.nombre,this.porcentaje,this.subtitle);
  this.skillService.save(skill).subscribe(
    data => {
      alert("Habilidad añadida correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("Error al añadir la habilidad");
      this.router.navigate(['']);
    }
  )
}
}
