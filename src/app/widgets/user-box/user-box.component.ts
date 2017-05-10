import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  /* tslint:disable */
  selector: '.userBox',
  /* tslint:enable */
  styleUrls: ['./user-box.component.css'],
  templateUrl: './user-box.component.html'
})
export class UserBoxComponent implements OnInit {


  constructor(private router: Router) {
    // se connecter au modif du user courant

  }

  public ngOnInit() {
    // TODO
  }

  public logout(){
    this.router.navigate(['login'])
  }

}
