import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  email:string;
    password:string;
 
  constructor()
   { 
     
  }
  ngOnInit(): void
   {
    throw new Error('Method not implemented.');
  }
  LogInUser()
    {
      if(this.email==="subhradeep311@gmail.com" && this.password==="admin")
      {
        console.log("dashboardonway");
      }
      console.log("unauthenticated");
    }
  }
 /* ngOnInit(): void 
  {
    email='';
    password='';

    logInUser()
    {
      if(this.email=="subhradeep311@gmail.com" && this.password=="admin")
      {
        console.log("dashboardonway");
      }
      console.log
    }
  }*/


