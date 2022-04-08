import { Component, Input, OnInit } from '@angular/core';
import { Perfiles } from 'src/app/interfaces/perfiles.interface';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  perfiles!: Perfiles[]  
  
  constructor(private profileServices: ServiceService) { }

  ngOnInit(): void {
    this.getProfiles();
  }

  getProfiles(): void{
    this.profileServices.getProfiles()
    .subscribe(profiles => {
      this.perfiles = profiles
    })
  }

  deleteProfile(id: number): void{
    this.profileServices.deleteProfile(id);
    this.getProfiles();
  }
}
