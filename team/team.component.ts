import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  
  @Input() Team : Team;

  constructor() {}

  ngOnInit() {}
}

export class Team {
  Name : string;
  FlagURL : string;
  OverallRating : number;

  constructor(name : string, flagURL : string, overallRating: number) { 
    this.Name = name;
    this.FlagURL = flagURL;
    this.OverallRating = overallRating;
  }
}