import { Injectable } from '@angular/core';
import {Git} from  './git';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GitService {
git:Git;
getgit(f) {
  interface ApiResponse {
name: string;
login: string;
avatar_url: any;
  }
const promise = new Promise ((resolve, reject) => {
  this.http.get <ApiResponse> ().toPromise().then(reducted => {
    this.git.name = reducted.name;
    this.git.login =reducted.login;
    this.git.avatar_url = reducted.avatar_url;
    resolve();
  },    error => {
    this.git.name = 'reducted.name';
    this.git.login = 'reducted.login';
      this.git.avatar_url = 'reducted.avatar_url';
    reject(error);
  });
});
return promise;
}



Collapse 

  constructor() { }
}
