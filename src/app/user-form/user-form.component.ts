import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  profile: FormGroup
  ngOnInit() {
    this.profile = this.fb.group({
      name: [''],
      password: ['',[this.passwordValidator()]]
    })
    this.profile.valueChanges.subscribe(_x=> console.log(this.profile))
  }
  

  passwordValidator():ValidatorFn{
    return (_control: AbstractControl): {[key:string]: boolean} | null => {
      if(this.profile !== undefined){
        console.log(this.profile.value.name)
        if(this.profile.value.name == ""){
          return {_control: true}
        }
        return null
      }
      
    }
    
  }

}
