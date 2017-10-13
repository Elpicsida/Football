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
  @Input() Name : string;
  HomeGoals? : number;
  AwayGoals? : number;
  HomePenaltyGoals? :number;
  AwayPenaltyGoals? :number;
  Winner : Team;

  match : Match;

  public IsPlayed() {
  } 

  constructor() { 
    
  }

  checkWinner() : void {
    if (this.HomePenaltyGoals != null && this.AwayPenaltyGoals != null) {
      this.setWinner(this.HomePenaltyGoals > this.AwayPenaltyGoals ? this.HomeTeam : this.AwayTeam);
    }
  }

  ngOnInit() {
    this.match = new Match(this.HomeTeam, this.AwayTeam, this.Name);
    this.Winner = new Team('Winner of ' + this.Name, "/assets/flags/Unknown.png", 1);
  }

  showPenaltyBlock():boolean {
    if (this.HomeGoals != null && this.AwayGoals != null) {
      if (this.AwayGoals === this.HomeGoals) {
        return true;
      }
      else {
        this.setWinner(this.AwayGoals > this.HomeGoals ? this.AwayTeam : this.HomeTeam);
        return false;
      }
    }
    return false;
  }

  setWinner(team : Team) {
    this.Winner = team;
  }

}

export class Match {
   Name : string;
   HomeTeam : Team;
   AwayTeam : Team;
   HomeGoals? : number;
   AwayGoals? : number;
   PenaltyHome? : number;
   PenaltyAway? : number;

   Winner : Team;

   constructor(homeTeam : Team, awayTeam : Team, name? :string) {
    this.Name = "Match";
    this.HomeTeam = homeTeam;
    this.AwayTeam = awayTeam;
    this.Winner = new Team('', "/assets/flags/Unknown.png", 1);
  }
}
