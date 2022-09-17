import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/Models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
})
export class RegistroComponent implements OnInit {
  user: UserModel;
  recallUser = false;

  constructor( private auht: AuthService,
               private router: Router ) { }

  ngOnInit() {
    this.user = new UserModel();
  }
  onSubmit( form: NgForm ){
    if( form.invalid){ return; }
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor'
    });
    Swal.showLoading();
    this.auht.newUser( this.user )
    .subscribe( resp => {
      // console.log( resp );
      Swal.close();
      if ( this.recallUser ){
        localStorage.setItem('email', this.user.email );
      }
      this.router.navigateByUrl('/home');
    }, ( err) => {
      // console.log( err.error.error.message );
      Swal.fire({
        icon: 'info',
        title: 'Error al autenticar',
        text: err.error.error.message
      });
    })
  }

}
