import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Persona } from '../models/persona.interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }

  url = `${environment.backendBaseUrl}/api/personalinformation`;
  
  urlpython= `${environment.URL_PHYTON}/documents`;

  


  getPersona_Id(id:string):Observable<Persona>{
    console.log(`${this.urlpython}/${id}`)
    return this.http.get<Persona>(`${this.urlpython}/${id}`);
  }
  

  public addPersona(persona:Persona):Observable<Persona>{
    console.log("creando usuario");
    
    return this.http.post<Persona>(this.url, persona);
  }
   
  public updatePersona(id:string, persona:Persona):Observable<Persona>{
    return this.http.put<Persona>(this.url + `/${id}`, persona);
  }

  getPersona():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.urlpython)
  }

  



}
