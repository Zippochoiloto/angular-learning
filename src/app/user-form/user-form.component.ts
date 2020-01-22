import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ValidatorFn,
  AbstractControl
} from "@angular/forms";
import { HttpService } from "../service/http.service";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"]
})
export class UserFormComponent implements OnInit {
  constructor(private fb: FormBuilder, private httpService: HttpService) {}
  profile: FormGroup;
  dataFromAPI: any;
  ngOnInit() {
    this.profile = this.fb.group({
      name: "",
      password: ["", [this.passwordValidator()]]
    });
    this.profile.valueChanges.subscribe(x => this.passwordValidator());
    this.httpService.getAPI().subscribe(val => {
      this.dataFromAPI = val;
      console.log(val)
    });
  }

  passwordValidator(): ValidatorFn {
    return (_control: AbstractControl): { [key: string]: boolean } | null => {
      if (this.profile !== undefined) {
        if (this.profile.value.name == "") {
          return { _control: true };
        }
        return null;
      }
    };
  }
}
