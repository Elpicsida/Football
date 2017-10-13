import { Component, OnInit, Input } from '@angular/core';
import { TeamComponent, Team } from '../team/team.component';

@Component({
  selector: '[group-team]',
  templateUrl: './group-team.component.html',
  styleUrls: ['./group-team.component.css']
})

export class GroupTeamComponent implements OnInit {

  @Input("group-team") 
  GroupTeam : GroupTeam;

  constructor() {
    //this.GroupTeam = team;
  }

  ngOnInit() {
  }

}

export class GroupTeam {
  Team : Team;
  Position : number;
  GoalsFor : number;
  GoalsAgainst : number;
  GoalsDifference : number;
  Played : number;
  Won : number;
  Draw : number;
  Lost : number;
  Points : number;

  constructor(team : Team) {
    this.Team = team;
    this.Position = 0;
    this.GoalsFor = 0;
    this.GoalsAgainst = 0;
    this.GoalsDifference = 0;
    this.Played = 0;
    this.Won = 0;
    this.Draw = 0;
    this.Lost = 0;
  }
}