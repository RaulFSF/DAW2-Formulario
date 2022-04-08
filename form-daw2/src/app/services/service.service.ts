import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { initProfiles } from '../init/initProfiles';
import { Perfiles } from '../interfaces/perfiles.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  profiles: Perfiles[] = [];

  constructor() { 
    this.profiles = initProfiles();
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
