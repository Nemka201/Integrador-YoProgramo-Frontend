import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SEducacionService } from 'src/app/service/educacion.service';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent {
  educacion: Educacion = {nombreE:'',descripcionE:'',desdehastaE:''}; // Instancio el objeto vacio
  constructor(private sE:SEducacionService,private activatedRoute:ActivatedRoute, private router: Router){}

  ngOnInit():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sE.detail(id).subscribe(
      data => { this.educacion = data; },
      err => {alert("Error al modificar la experiencia"); this.router.navigate(['']);}
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sE.update(id,this.educacion).subscribe(
      data => {this.router.navigate([''])},
      err => {alert("Error al modificar la experiencia");this.router.navigate([''])}
    )
  }
}

