import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registroFormulario!:FormGroup;
  disparadorPassword:boolean = false;

  constructor(
    private readonly constructorFormulario: FormBuilder,
    private userService:UserService,
    private router:Router,
    private modal:ModalService
  ){

  }
  ngOnInit(): void {
    this.registroFormulario = this.formInit();
  }

  onSubmit(){

    if(this.registroFormulario.valid){
      this.userService.register(this.registroFormulario.value)
          .then(
            response =>{
              console.log(response);
              this.modal.success('Se ha registrado con exito al usuario!')
              .then(
                respuesta =>{
                  this.router.navigate(['login']);
                }
              )
            }
           )
          .catch( error => {
            console.log(error)
              this.modal.error('Hubo un problema con el registro, reintente nuevamente.')
            }
          )
    }else{
      this.modal.error('El formulario no ha sido completado correctamente.');
    }
  }

  formInit():FormGroup{
    return this.constructorFormulario.group(
      {
        usuario : new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      }
    )
  }

  verificarCampoPassword(){
    if(this.registroFormulario.value.password.length < 6)
    {
      this.disparadorPassword = true;
    }
    else{
      this.disparadorPassword = false;
    }
  }
}
