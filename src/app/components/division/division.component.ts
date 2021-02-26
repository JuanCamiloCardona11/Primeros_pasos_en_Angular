import { Component} from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent {
    estado:boolean = true;

    constructor() { }
    
    vecPersonas:string[] = ["Camilo Cardona (yo)","Andres Grisales","Cristian Morales","Santiago Echeverry","Alejandro Valencia"]
}
