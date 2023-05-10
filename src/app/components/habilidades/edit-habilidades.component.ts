import { Component, OnInit} from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/service/skill.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-habilidades',
  templateUrl: './edit-habilidades.component.html',
  styleUrls: ['./edit-habilidades.component.css']
})
export class EditHabilidadesComponent implements OnInit{
  skill : Skill = {nombre: '', porcentaje: 0, subtitle: ''};
  constructor(
    private skillService: SkillService,
     private activatedRoute:ActivatedRoute,
     private router:Router){}
  ngOnInit(): void {
    const id: number = this.activatedRoute.snapshot.params['id'];
    this.skillService.detail(id).subscribe(
      data => {
        this.skill = data;
      }, err => {alert("Error al modificar"); this.router.navigate(['']);}
    )
  }
  onUpdate(){
    const id: number = this.activatedRoute.snapshot.params['id'];
    this.skillService.update(id, this.skill).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {alert("Error al modificar habilidad"); this.router.navigate(['']);}
    )
  }
}
