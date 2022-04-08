import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Perfiles } from '../interfaces/perfiles.interface';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  profiles: Perfiles[] = [];
  listProfiles: Perfiles[] = [
    {
        id: 0,
        name: "Paco",
        age: 20,
        desc: "Esto es una prueba de Paco"
    },
    {
        id: 1,
        name: "Emilio",
        age: 20,
        desc: "Esto es una prueba de Emilio"
    },
    {
        id: 2,
        name: "Manuel",
        age: 34,
        desc: "Esto es una prueba de Manuel"
    },
    {
        id: 3,
        name: "Julia",
        age: 5,
        desc: "Esto es una prueba de Julia"
    },
  ];

  constructor() { 
    this.profiles = this.listProfiles;
  }

  getProfiles(): Observable<Perfiles[]>{
    const profiles = of(this.profiles);
    return profiles;
  }

  getProfileById(id:number): Observable<Perfiles>{
    const profile = this.profiles.filter(pro => pro.id == id)[0];
    return of(profile);
  }

  createProfile(profile: Perfiles): Observable<Perfiles>{
    profile.id = (this.profiles.length);
    this.profiles.push(profile);
    return of(profile);
  }
  
  deleteProfile(id: number): void{
    const oldLength = this.profiles.length
    this.profiles = this.profiles.filter(pro => pro.id != id);
  }

  updateProfile(profile: Perfiles): Observable<boolean>{
    this.profiles = this.profiles.filter(pro => pro.id != profile.id);
    this.profiles.push(profile);
    return of(true);
  }

}
