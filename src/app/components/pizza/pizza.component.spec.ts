import { TestBed, async } from '@angular/core/testing';

import { PizzaComponent } from './pizza.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PizzaComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(PizzaComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Create new Pizza!'`, async(() => {
    const fixture = TestBed.createComponent(PizzaComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Create new Pizza!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(PizzaComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Create new Pizza!');
  }));
});
