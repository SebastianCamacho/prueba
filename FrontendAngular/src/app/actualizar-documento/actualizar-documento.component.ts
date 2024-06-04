// import { Component, OnInit, inject, input } from '@angular/core';
// import { Observable } from 'rxjs';
// import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
// import { PersonaService } from '../service/persona.service';
// import { Persona } from '../models/persona.interfaces';
// import { Console } from 'console';


// @Component({
//   selector: 'app-actualizar-documento',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './actualizar-documento.component.html',
//   styleUrls: ['./actualizar-documento.component.css']
// })
// export class ActualizarDocumentoComponent {
//   persona:Persona = {
//     _id: undefined,
//     DeletionDate: null,
//     ModificationDate: null,
//     CreationDate: undefined,
//     tipoDocumento: '',
//     documento: '',
//     nombre1: '',
//     nombre2: '',
//     apellido1: '',
//     apellido2: '',
//     fechaNacimiento: undefined,
//     sexo: ''
//   }

//   private personaService = inject(PersonaService)
//   private formb = inject(FormBuilder)

// clear(){
  
//   this.persona.id="";
//   this.persona.tipoDocumento="";
//   this.persona.documento="";
//   this.persona.nombre1="";
//   this.persona.nombre2="";
//   this.persona.apellido1="";
//   this.persona.apellido2="";
//   this.persona.fechaNacimiento="";
//   this.persona.sexo="";
  
  
// }

//   onActualizarPersona(persona: Persona): void {
//     console.log("modificar");
    
//     this.personaService.updatePersona(persona.id, persona).subscribe(res => {
//       if (res) {
//         alert(`La persona número ${persona.id} se ha modificado con exito!`);

//       } else {
//         alert('Error! :(')
//       }
//     });
//     this.clear();
//   }

//   onBuscarPersona_Id(id: string): void {
//     this.clear();
//     console.log("buscando persona")
//     this.personaService.getPersona_Id(id).subscribe(res => {
//       console.log(res)
//       if (res) {

//         alert(`la persona con ID: ${id} ¡encontrada con exito!`)
//         console.log(res);
//         this.persona = res;


//       } else {

//         alert(`Algo fallo!! Revisar id ingresado`)

//       }
//     })
//   };

  
// }

