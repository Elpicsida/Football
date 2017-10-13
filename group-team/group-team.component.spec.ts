import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTeamComponent } from './group-team.component';

describe('GroupTeamComponent', () => {
  let component: GroupTeamComponent;
  let fixture: ComponentFixture<GroupTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
