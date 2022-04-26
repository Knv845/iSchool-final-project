import { Component, Output,EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { LaundaryAdminService } from "./admin.service";

@Component({
    selector:'app-admin',
    template:`
      <div class="container mt-5">
        <div class="text-center">
        <h4>Please Login For the Admin</h4>
        </div>
        <form [formGroup]="loginForm" (ngSubmit)="login()">
          <div class="mb-3">
            <label for="usermail" class="form-label"> Admin Username</label>
            <input
              formControlName="usermail"
              type="email"
              class="form-control"
              id="usermail"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              All Details are Safe Here
            </div>
          </div>
          <div class="mb-3">
            <label for="userpassword" class="form-label">Admin Password</label>
            <input
              formControlName="userpassword"
              type="password"
              class="form-control"
              id="userpassword"
            />
          </div>
          <p *ngIf="error" class="text-warning">{{ error }}</p>
          <button type="submit" class="btn btn-primary mb-2">Login</button>
</form>
      </div>

    `
})


export class AdminComponent{

  public loginForm !: FormGroup;
  error: any;
  constructor(
    private formbuilder: FormBuilder,
    private signUp: LaundaryAdminService,
    private router: Router
  ) {}
  ngOnInit(): void {

    this.loginForm = this.formbuilder.group({
      usermail: [''],
      userpassword: [''],
    });
  }
  login() {
  
    this.signUp.getSignup().subscribe((res) => {
      const res1 = Object.values(res);
      const user = res1.find((a: any) => {
        return (
          a.usermail === this.loginForm.value.usermail &&
          a.userpassword === this.loginForm.value.userpassword
        );
      });
      if (user) {
        this.router.navigate(['/admin-detail']);
        console.log()
      } else {
        this.error = 'incorrect email or password!!';
        console.log(this.loginForm.value.usermail)
        console.log(this.loginForm.value.userpassword)
      }
    });
  }
}
