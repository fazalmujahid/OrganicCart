import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent   {
  user$: Observable<firebase.User>;
  constructor(public auth: AuthService) {
    
   }

  logout(){
   this.auth.logout();
  }

}
