import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PersonaService } from '../service/persona.service';
import { CreationDate, ID, Persona } from '../models/persona.interfaces';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-datos-personales',
  standalone: true,
  imports: [RouterLink, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './add-datos-personales.component.html',
  styleUrl: './add-datos-personales.component.css',
})
export class AddDatosPersonalesComponent {
  
 
  
  
  persona: Persona = {
    
  };

  private personaService = inject(PersonaService);

  constructor() {}

  
  onAddPersona(persona: Persona): void {
    this.personaService.addPersona(persona).subscribe((res) => {
      if (res) {
        alert(`El/la Señor@ ${persona.nombre1} se ha registrado con exito!`);
      } else {
        alert('Error! :(');
      }
    });
  }
}
