import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario!:FormGroup

  constructor(
    private formBuilder:FormBuilder,
    private personaService:PersonaService,
  ){

  }
  ngOnInit(): void {
    this.formulario = this.formInit();
  }

  formInit(){
    return this.formBuilder.group(
      {
        nombre: new FormControl('prueba1'),
        apellido: new FormControl('prueba2'),
      }
    )
  }

  async submitFormulario() {
    console.log(this.formulario.value);
    const response = await this.personaService.addPersonas(this.formulario.value)
    console.log(response);
  }
}
