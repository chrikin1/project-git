import { Injectable } from '@angular/core';
import {Git} from  './git';
import {HttpClient} from '@angular/common/http';
import {environment} from  '../environments/environment'
@Injectable({ 
  providedIn: 'root'
})
export class GitService {
git:Git;
constructor(private http: HttpClient) {}
getgit(f) {
  interface ApiResponse {
name: string;
login: string;
avatar_url: any;
  }
const promise = new Promise ((resolve, reject) => {
  this.http.get <ApiResponse> (environment.url+environment.token).toPromise().then(res => {
    this.git.name = res.name;
    this.git.login =res.login;
    this.git.avatar_url = res.avatar_url;
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

  
}
