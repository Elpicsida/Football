import { Component, OnInit, Input } from '@angular/core';
import { TeamComponent, Team } from '../team/team.component';

@Component({
  selector: 'match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})

export class MatchComponent implements OnInit {

  @Input() HomeTeam: Team;
  @Input() AwayTeam: Team;

  public IsPlayed() {
  } 

  constructor() { 
  }

  ngOnInit() {
  }

}

export class Match {
   Name : string;
   HomeTeam : Team;
   AwayTeam : Team;
   HomeGoals? : number;
   AwayGoals? : number;

   constructor(homeTeam : Team, awayTeam : Team) {
    this.Name = "Match";
    this.HomeTeam = homeTeam;
    this.AwayTeam = awayTeam;
  }
}
