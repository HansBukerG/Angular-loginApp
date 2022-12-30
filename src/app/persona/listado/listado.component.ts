import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/persona';
import { ModalService } from 'src/app/services/modal.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  personas!: Persona[];

  constructor(
    private personaService:PersonaService,
    private modal:ModalService,
  ){

  }
  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(
      respuesta => {
        console.log(respuesta);

        this.personas = respuesta
      }
    )
  }

  eliminarPersona(item:Persona){

    this.modal.question('Hola','Estás seguro de ejecutar esta acción?')
    .then(
      respuesta => {
        if (respuesta) {
          this.personaService.borrarPersona(item);
        }
      }
    )
  }
}
