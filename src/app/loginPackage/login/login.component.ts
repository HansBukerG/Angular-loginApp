import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  formularioLogIn!:FormGroup;

  constructor(
    private readonly formBuilder:FormBuilder,
    private userLogin:UserService,
    private modal:ModalService,
    private route:Router
  ){

  }

  ngOnInit(): void {
    this.formularioLogIn = this.formInit();
  }

  logIn(){
    if (this.formularioLogIn.valid) {
      this.userLogin.login(this.formularioLogIn.value)
    } else {
      this.modal.error('Debes completar bien los campos antes de proceder');
    }
  }

  formInit(){
    return this.formBuilder.group(
      {
        usuario: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required)
      }
    )
  }

}
