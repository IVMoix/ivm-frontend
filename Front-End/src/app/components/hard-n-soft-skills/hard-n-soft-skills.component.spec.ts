import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardNSoftSkillsComponent } from './hard-n-soft-skills.component';

describe('HardNSoftSkillsComponent', () => {
  let component: HardNSoftSkillsComponent;
  let fixture: ComponentFixture<HardNSoftSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardNSoftSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardNSoftSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
