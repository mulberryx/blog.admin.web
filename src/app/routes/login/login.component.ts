import { Component, OnInit } from '@angular/core';
import { LoginSceneService }  from '../../services/login-scene.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor (public loginSceneService: LoginSceneService) { }

  ngOnInit() {
    this.loginSceneService.initScene();
  }

  validForm () {
    
  }

  handleLogin () {

  }
}
