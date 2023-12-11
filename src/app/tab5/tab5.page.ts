import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  cad:boolean=false
  user={
    userName: 'root',
    password: '123456'
  }
  logado: boolean=false

  fazerLogin(user:any, pass:any){
    if(this.user.userName=== user && this.user.password===pass){
      this.logado=true
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
