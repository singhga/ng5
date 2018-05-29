import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

private username : string;
private password : string;

constructor(private router : Router){}
ValidateUser()
{
  if(this.username == 'admin' && this.password == 'admin')
  {
    console.log("s");
    this.router.navigateByUrl('/dashboard');
}
else
{
  console.log('fail')
}
}

}
