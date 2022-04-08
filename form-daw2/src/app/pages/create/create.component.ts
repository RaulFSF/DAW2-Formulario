import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfiles } from 'src/app/interfaces/perfiles.interface';
import { ServiceService } from 'src/app/services/service.service';
import { switchMap } from 'rxjs';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  flag: boolean = true;
  profileForm: FormGroup;
  profile?: Perfiles;

  constructor(
    private profileService: ServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.profileForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      age: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      desc: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)])
    });
  }

  ngOnInit(): void {
    if(this.router.url.includes('edit')){
      this.activatedRoute.params.pipe(
        switchMap(({id}) => this.profileService.getProfileById(id))
      ).subscribe(profile =>{
        if(profile){
          this.profile = profile;
          this.flag = false;
          this.profileForm.controls['name'].setValue(profile.name);
          this.profileForm.controls['age'].setValue(profile.age);
          this.profileForm.controls['desc'].setValue(profile.desc);
        } else{
          this.router.navigate(['/']);
        }
      });
    } else{
      this.flag = true;
    }
  }

  submit(): void{
    this.profile ={
      ...this.profile,
      ...this.profileForm.value
    };
    var validatorCont = 0;
    var controladores = this.profileForm.controls;
    for(let controlador in controladores){
      if(controladores[controlador].invalid){
        validatorCont++;
      }
    }
    if(validatorCont == 0){
      if(this.flag){
        this.profileService.createProfile(this.profile!);
      } else{
        this.profileService.updateProfile(this.profile!);
      }
      this.router.navigate(['/home']);
    }
  }
}
