import { Component, OnInit } from '@angular/core';
import { LEADER } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  leaders : LEADER[]
  constructor(private leaderservice: LeaderService) { }

  ngOnInit(): void {
    this.leaders = this.leaderservice.getLeaders();
  }

}
