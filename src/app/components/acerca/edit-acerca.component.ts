import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { SImageService } from 'src/app/service/image.service';


@Component({
  selector: 'app-edit-acerca',
  templateUrl: './edit-acerca.component.html',
  styleUrls: ['./edit-acerca.component.css']
})
export class EditAcercaComponent implements OnInit{
  persona:persona = new persona("","","");

  constructor(private sPersona: PersonaService, private activatedRouter: ActivatedRoute, private router: Router, public imageService: SImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al modificar el perfil");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imageService.url
    this.sPersona.update(id, this.persona).subscribe(
      data => {
        alert("Perfil modificado exitosamente")
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el perfil");
        this.router.navigate(['/edit-perfil/{{persona.id}}']);
      }
    )
  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = 'perfil_' + id;
    this.imageService.uploadImage($event, name)
  }
}

