import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { GroupTeamComponent, GroupTeam } from '../group-team/group-team.component';
import { MatchComponent, Match } from '../match/match.component';
import { TeamComponent, Team } from '../team/team.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})

export class GroupComponent implements OnInit {

  @Input() Group : Group;
  
  constructor() { 
  }

  ngOnInit() {
    this.Group.Matches = [ new Match(this.Group.Teams[0].Team, this.Group.Teams[2].Team),
    new Match(this.Group.Teams[1].Team, this.Group.Teams[3].Team),
    new Match(this.Group.Teams[0].Team, this.Group.Teams[3].Team),
    new Match(this.Group.Teams[1].Team, this.Group.Teams[2].Team),
    new Match(this.Group.Teams[0].Team, this.Group.Teams[1].Team),
    new Match(this.Group.Teams[2].Team, this.Group.Teams[3].Team)];
  }

  setPoints() {
    this.recalculatePoints();
  }

  private recalculatePoints() {
    var matchesPlayed : number = 0;

    for(var i = 0 ; i < this.Group.Teams.length; i++) {
      this.Group.Teams[i].GoalsAgainst = 0;
      this.Group.Teams[i].GoalsFor = 0;
      this.Group.Teams[i].GoalsDifference = 0;
      this.Group.Teams[i].Lost = 0;
      this.Group.Teams[i].Played = 0;
      this.Group.Teams[i].Won = 0;
      this.Group.Teams[i].Points = 0;
      this.Group.Teams[i].Draw = 0;
    }

    for(var i = 0 ; i < this.Group.Matches.length; i++) {
      var goalsAway = +this.Group.Matches[i].AwayGoals;
      var goalsHome = +this.Group.Matches[i].HomeGoals;

      if (!Number.isNaN(goalsAway) && !Number.isNaN(goalsHome)) {
     // && this.Group.Matches[i].AwayGoals !== '' && this.Group.Matches[i].HomeGoals !== ''){
        matchesPlayed++;
        var homeTeam = this.Group.Teams.filter(x => x.Team.Name == this.Group.Matches[i].HomeTeam.Name)[0];
        var awayTeam = this.Group.Teams.filter(x => x.Team.Name == this.Group.Matches[i].AwayTeam.Name)[0];
        
        homeTeam.GoalsFor += goalsHome;
        homeTeam.GoalsAgainst += goalsAway;

        awayTeam.GoalsFor += goalsAway;
        awayTeam.GoalsAgainst += goalsHome;

        awayTeam.GoalsDifference += goalsAway - goalsHome;
        homeTeam.GoalsDifference += goalsHome - goalsAway;

        if (goalsHome > goalsAway) {
          homeTeam.Points += 3;
          homeTeam.Won += 1;
          awayTeam.Lost += 1;
        }
        else if (goalsHome < goalsAway) {
          awayTeam.Points += 3;
          awayTeam.Won += 1;
          homeTeam.Lost += 1;
        }
        else {
          awayTeam.Points += 1;
          homeTeam.Points += 1;
          homeTeam.Draw += 1;
          awayTeam.Draw += 1;
        }

        homeTeam.Played += 1;
        awayTeam.Played += 1;
      }
    }

    this.Group.Teams.sort(function(a : GroupTeam, b: GroupTeam) {
      if (a.Points != b.Points) {
        return b.Points - a.Points;
      }
      else {
        if (b.GoalsDifference != a.GoalsDifference) {
          return b.GoalsDifference - a.GoalsDifference;
        }
        else {
          if (b.GoalsFor != a.GoalsFor) {
            return b.GoalsFor - a.GoalsFor;
          } 
        }
      }});
    this.resetRowsColor();
    
    if (matchesPlayed == 6) {
      this.addColorToRows();
      this.Group.FirstPlaceTeam  = this.Group.Teams[0].Team;
      this.Group.SecondPlaceTeam = this.Group.Teams[1].Team;
    }
  }

  private addColorToRows() {    
    var table : any = document.getElementById('groupTable'+ this.Group.Name);
    table.rows[1].classList.add("success");
    table.rows[2].classList.add("success");
    table.rows[3].classList.add("danger");
    table.rows[4].classList.add("danger");
  }

  private resetRowsColor() {
    var table : any = document.getElementById('groupTable'+ this.Group.Name);
    table.rows[1].classList.remove("success");
    table.rows[2].classList.remove("success");
    table.rows[3].classList.remove("danger");
    table.rows[4].classList.remove("danger");
    table.rows[1].classList.remove("danger");
    table.rows[2].classList.remove("danger");
    table.rows[3].classList.remove("success");
    table.rows[4].classList.remove("success");
  }
}

export class Group {
   Name : string;
   Teams : GroupTeam[];
   Matches : Match[];

   FirstPlaceTeam : Team;
   SecondPlaceTeam : Team;

   constructor(name : string, groupTeams : GroupTeam[]) { 
    this.Name = name;
    this.Teams = groupTeams;
    this.FirstPlaceTeam = new Team('1st of ' + this.Name, "/assets/flags/Unknown.png", 1);
    this.SecondPlaceTeam = new Team('2nd of ' + this.Name, "/assets/flags/Unknown.png", 1);
  }
}