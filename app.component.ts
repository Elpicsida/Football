import { Component } from '@angular/core';
import { GroupTeamComponent, GroupTeam } from './group-team/group-team.component';
import { TeamComponent, Team } from './team/team.component';
import { GroupComponent, Group } from './group/group.component';
import { DataService } from './data.service';
import { Match } from './match/match.component';

const t1 : GroupTeam = new GroupTeam(new Team('Poland', '/assets/flags/Poland.png', 80));
const t2 : GroupTeam = new GroupTeam(new Team('Germany', '/assets/flags/Germany.png', 80));
const t3 : GroupTeam = new GroupTeam(new Team('Netherlands', '/assets/flags/Netherlands.png', 80));
const t4 : GroupTeam = new GroupTeam(new Team('Slovakia', '/assets/flags/Slovakia.png', 80));

const t5 : GroupTeam = new GroupTeam(new Team('Poland', '/assets/flags/Poland.png', 80));
const t6 : GroupTeam = new GroupTeam(new Team('Germany', '/assets/flags/Germany.png', 80));
const t7 : GroupTeam = new GroupTeam(new Team('Netherlands', '/assets/flags/Netherlands.png', 80));
const t8 : GroupTeam = new GroupTeam(new Team('Slovakia', '/assets/flags/Slovakia.png', 80));

const Group1 : Group = new Group('A', [t1, t2,t3,t4]);
const Group2 : Group = new Group('B', [t5, t6,t7,t8]);
const Group3 : Group = new Group('C',  [t5, t6,t7,t8]);
const Group4 : Group = new Group('D',  [t5, t6,t7,t8]);
const Group5 : Group = new Group('E',  [t5, t6,t7,t8]);
const Group6 : Group = new Group('F', [t5, t6,t7,t8]);
const Group7 : Group = new Group('G', [t5, t6,t7,t8]);
const Group8 : Group = new Group('H', [t5, t6,t7,t8]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  groups: Group[];
  finals: Match[];

  constructor(private _dataService: DataService) {
    this.groups = [Group1, Group2, Group3, Group4, Group5, Group6, Group7, Group8];
    this.finals = [];
    this.finals[0] = new Match(this.groups[0].Teams[2].Team,this.groups[0].Teams[3].Team);
  }
}