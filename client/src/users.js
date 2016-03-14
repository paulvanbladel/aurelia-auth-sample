import {inject} from 'aurelia-framework';
import { GithubHttpClient} from './githubHttpClient'
import 'fetch';

@inject(GithubHttpClient)
export class Users {
  heading = 'Github Users';
  users = [];

  constructor(http) {
     this.http = http;
  }

  activate() {
    return this.http.fetch('users')
      .then(response => response.json())
      .then(users => this.users = users);
  }
}
