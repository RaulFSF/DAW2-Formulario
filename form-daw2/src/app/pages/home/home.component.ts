import { Component, Input, OnInit } from '@angular/core';
import { Perfiles } from 'src/app/interfaces/perfiles.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  
  @Input() perfiles! : Perfiles[]

  constructor() { }

  ngOnInit(): void {
  }

}
