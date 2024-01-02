import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArLaucherPage } from './ar-laucher.page';

describe('ArLaucherPage', () => {
  let component: ArLaucherPage;
  let fixture: ComponentFixture<ArLaucherPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArLaucherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
