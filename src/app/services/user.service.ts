import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Auth, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private auth:Auth,
    private modal:ModalService,
    private route:Router
  ) { }

  register({usuario,password}:any){
    return createUserWithEmailAndPassword(this.auth,usuario,password);
  }

  login({usuario,password}:any){
    return signInWithEmailAndPassword(this.auth,usuario,password)
    .then(
      respuesta => {
        //this.SetUserData(respuesta.user)
        this.modal.success('Usuario autenticado exitosamente!')
        .then(
          respuesta =>{
            if (respuesta.isConfirmed) {
                this.route.navigate(['login/main']);
            }
          }
        )
      }
    ).catch(
      respuesta => {
        console.log(respuesta);
        this.modal.error('Usuario/contraseña incorrectos, reintente nuevamente.');
      }
    );
  }

  logout(){
    return signOut(this.auth);
  }

  currentUser(){
    return getAuth().currentUser;
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  /*
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
  */
}

