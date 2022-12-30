import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore, collection, addDoc,collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Persona } from "../interfaces/persona";
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(
    private auth:Auth,
    private firestore:Firestore,
    private modal:ModalService,
  ) { }

  addPersonas(persona:Persona){
    const personaRef =  collection(this.firestore,'lista-personas');
    return this.auth.onAuthStateChanged(
      user => {
        if (user) {
          addDoc(personaRef,persona);
          this.modal.success('Persona añadida con éxito!')
        }
      }
    )
  }

  getPersonas():Observable<Persona[]>{
    const personaRef =  collection(this.firestore,'lista-personas');
    return collectionData(personaRef,{idField: 'id' }) as Observable<Persona[]>;
  }

  borrarPersona(persona:Persona){
    const personaDocRef = doc(this.firestore,`lista-personas/${persona.id}`);
    deleteDoc(personaDocRef)
    .then(
      respuesta => {
        this.modal.success('El objeto ha sido borrado con exito!');
      }
    )
    .catch(
      respuesta => {
        this.modal.error('No se ha podido borrar el objeto :c');
      }
    )
  }
}
