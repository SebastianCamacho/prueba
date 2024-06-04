import { Component, inject, OnInit } from '@angular/core';
import { PersonaService } from '../service/persona.service';
import { CreationDate, Persona } from '../models/persona.interfaces';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-listar-datos-personales',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './listar-datos-personales.component.html',
  styles: `  `,
})
export class ListarDatosPersonalesComponent implements OnInit {
  personaService = inject(PersonaService);
  
  public listPerson: Persona[] = [];



  ngOnInit() {
    this.personaService.getPersona()
    .subscribe(res => {
      this.listPerson = res;
      console.log(this.listPerson, res);
    });
  }

  getFechaNacimiento(fechaNacimiento: Date | CreationDate | undefined): Date {
    if (!fechaNacimiento) {
      return new Date('0000-00-00');
    }
    return (fechaNacimiento as CreationDate).$date || (fechaNacimiento as Date);
  }

}
