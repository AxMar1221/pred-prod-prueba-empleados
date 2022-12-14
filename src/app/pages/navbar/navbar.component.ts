import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor( private auth: AuthService,
               private router: Router ) { }

  ngOnInit() {
  }
  logout(){
    this.auth.loutout();
    this.router.navigateByUrl('/login');
  }

}
