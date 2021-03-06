/// <reference path="../../typings/tsd.d.ts" />

import {coreDirectives} from 'angular2/directives';
import {Component, View} from 'angular2/angular2';
import {status, json} from '../utils/fetch';
import { Router, RouterLink } from 'angular2/router';
import {ParseManager} from '../Model/ParseManager';

let styles   = require('./signup.css');
let template = require('./signup.html');

@Component({
  selector: 'signup'
})
@View({
  directives: [ RouterLink, coreDirectives ],
  styles: [ styles ],
  template: template
})
export class Signup {
  constructor(public router: Router, public parseManager: ParseManager) {
  }

  signup(event, username, password) {
    event.preventDefault();
    
    var self = this
    var user = new Parse.User();
    user.set("username", username);
    user.set("password", password);
      
    this.parseManager.signup(username, password, ()=>{
        console.log("User signed in through email");
        self.router.parent.navigate('/home');
    });
  }

  login(event) {
    event.preventDefault();
    this.router.parent.navigate('/login');
  }

}
