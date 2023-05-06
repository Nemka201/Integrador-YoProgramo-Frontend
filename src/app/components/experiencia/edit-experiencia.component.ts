import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { SExperienciaService } from '../../service/experiencia.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit{
  expLab: Experiencia = {nombreE:'',descripcionE:'',desdehastaE:''}; // Instancio el objeto vacio
  constructor(private sExp:SExperienciaService,private activatedRoute:ActivatedRoute, private router: Router){}

  ngOnInit():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sExp.detail(id).subscribe(
      data => { this.expLab = data; },
      err => {alert("Error al modificar la experiencia"); this.router.navigate(['']);}
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sExp.update(id,this.expLab).subscribe(
      data => {this.router.navigate([''])},
      err => {alert("Error al modificar la experiencia");this.router.navigate([''])}
    )
  }
}
