import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Perfiles } from 'src/app/interfaces/perfiles.interface';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  profile?: Perfiles;

  constructor(
    private ProfileService: ServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.ProfileService.getProfileById(id))
    )
    .subscribe( profile => this.profile = profile);
  }

  deleteProfile(): void{
    this.ProfileService.deleteProfile(this.profile!.id);
    this.router.navigate(['/']);
  }

}
