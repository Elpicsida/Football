import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { GroupComponent } from './group/group.component';
import { GroupTeamComponent } from './group-team/group-team.component';
import { TeamComponent } from './team/team.component';
import { MatchComponent } from './match/match.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    GroupTeamComponent,
    TeamComponent,
    MatchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
