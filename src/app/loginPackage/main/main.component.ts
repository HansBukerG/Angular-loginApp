import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public userData!:any;

  constructor(
    private userService:UserService,
    private router:Router
  ){

  }
  ngOnInit(): void {
    this.userData = this.userService.currentUser();
    console.log('usuario detectado: ' + this.userData);
  }

  logOut(){
    this.userService.logout().then(
      respuesta => {
        console.log(respuesta);
        this.router.navigate(['login']);
      }
    )
  }
}
