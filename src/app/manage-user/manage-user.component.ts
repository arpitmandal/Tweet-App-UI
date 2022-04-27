import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './user.model';
import { UserService } from '../Services/user.service';
import { MainNavService } from '../Services/main-nav.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.sass']
})
export class ManageUserComponent implements OnInit {
  userFormGroup: FormGroup;
  genders = [
    'Male' ,
    'Female',
    'Other' 
  ];
  submitted = false;
  public error: any;
  constructor(private formBuilder: FormBuilder, private userService : UserService, private menuService: MainNavService ) { }

  ngOnInit(): void {
    this.userFormGroup = this.formBuilder.group({
      first_Name: ['', Validators.required],
      last_Name: ['', Validators.required],
      gender : ['Male', Validators.required],
      dateOfBirth : [Date.now,Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
  });
  }
  get f() { return this.userFormGroup.controls; }

  setTab(tabNum: any, activeTab: string) {
    this.menuService.setTabActive(tabNum);
  }

  onSubmit() {
      if (this.userFormGroup.invalid) {
          return;
      }
      let user = new User();
      user.first_Name = this.userFormGroup.value['first_Name'];
      user.last_Name = this.userFormGroup.value['last_Name'];
      user.gender = this.userFormGroup.value['gender'];
      user.dateOfBirth = this.userFormGroup.value['dateOfBirth'];
      user.email = this.userFormGroup.value['email'];
      user.password = this.userFormGroup.value['password'];
      this.userService.AddUser(user).subscribe(res => {
        this.submitted = true;
        this.error = 'User Regestered Successfully';
        console.log(this.error)
      },
      err=> {
      })
  }
}
