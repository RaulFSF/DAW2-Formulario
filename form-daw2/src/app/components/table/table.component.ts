import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import { Perfiles } from 'src/app/interfaces/perfiles.interface';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit { 
  @Input() perfiles!: Perfiles[] | Observable<Perfiles[]>;
  @Output() deleteProfileEvent = new EventEmitter<number>();

  displayedColumns: string[] = ['id', 'name', 'age', 'description', 'actions']
  dataSource!: Perfiles[] | Observable<Perfiles[]>;

  constructor(private perfilesService: ServiceService) { }

  ngOnInit(): void {
    if(this.perfiles){
      this.dataSource = this.perfiles;
    }
  }
  deleteProfile(id: number){
    this.deleteProfileEvent.emit(id);
    this.dataSource = this.perfilesService.getProfiles();
  }
}
