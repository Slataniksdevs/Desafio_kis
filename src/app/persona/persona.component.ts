import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Persona {
  nombre: string;
  apellido: string;
  rut: string;
  sexo: string;
  telefono: string;
  direccion: string;
  fechaNacimiento: Date;
  correoElectronico: string;
}

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

}