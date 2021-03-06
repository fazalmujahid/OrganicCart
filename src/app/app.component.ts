import { UserService } from './user.service';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService,
     private auth: AuthService,
     private router: Router){

        auth.user$.subscribe(user =>{
        if(user) {
          userService.save(user);
          let returnUrl = localStorage.getItem('returnUrl');
          console.log(returnUrl === 'null');
          if(returnUrl !== 'null') router.navigateByUrl(returnUrl);
        } 
    })
  }
}
