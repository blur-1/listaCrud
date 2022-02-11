import { Component } from '@angular/core';
import { throttleTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listaCrud';
  
  listaContactos: any[] = [
      {'name': 'Juan', 'cel': '9999999', 'email':'juan@juan.com'},
      {'name': 'Maria', 'cel': '888888', 'email':'maria@maria.com'},
      {'name': 'Pedro', 'cel': '555555', 'email':'pedro@pedro.com'}
  ];
  
  objeto: any = {};
  objeto2: any = {};

  agregarContacto():void{
    this.listaContactos.push(this.objeto);
    this.objeto = {};
    //console.log(this.listaContactos);
  }
  myIndex: number =0;
  editarContacto(itemSeleccionado: any){
    this.objeto2.name = itemSeleccionado.name;
    this.objeto2.cel = itemSeleccionado.cel;
    this.objeto2.email = itemSeleccionado.email;
    this.myIndex = this.listaContactos.indexOf(itemSeleccionado);
    //console.log(this.objeto2);
    //console.log(this.myIndex);
  }
  actualizarContacto(){
    this.listaContactos[this.myIndex].name = this.objeto2.name;
    this.listaContactos[this.myIndex].cel = this.objeto2.cel;
    this.listaContactos[this.myIndex].email=  this.objeto2.email;
    this.objeto2 = {};
    
  }
  eliminarContacto(itemElegido: any){
    let alert = confirm('Seguro desea eliminar este contacto?');
      if(alert){
        this.myIndex = this.listaContactos.indexOf(itemElegido);
        this.listaContactos.splice(this.myIndex ,1);
        //console.log(this.listaContactos);
      }
    return this.listaContactos;
  }


}
