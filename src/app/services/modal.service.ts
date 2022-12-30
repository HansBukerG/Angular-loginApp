import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  question(cabecero:string,cuerpo:string){
    return Swal.fire(cabecero,cuerpo,'question');
  }

  success(cuerpo:string){
    return Swal.fire('Exito!',cuerpo,'success');
  }

  error(cuerpo:string){
    return Swal.fire('Ha ocurrido un problema :(',cuerpo,'error');
  }
}
