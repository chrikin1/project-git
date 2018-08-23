import { Component, OnInit } from '@angular/core';
import { GitService } from '../../git.service';
import {HttpClient} from '@angular/common/http';
import { Git} from '../../git';


@Component({
  selector: 'gg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[GitService]
})
export class ProfileComponent implements OnInit {
git:Git
  constructor(private gitService:GitService) { }

  ngOnInit() {
    this.gitService.getgit();
    this.git=this.gitService.git;
  }

}
