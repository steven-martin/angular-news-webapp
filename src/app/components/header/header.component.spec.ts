import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Construction()', () => {
    it('should create', async(() => {
      // Arrange, Act, Assert
      expect(component).toBeTruthy();
    }));
  });

  describe('HTML Template', () => {
    it('should display the footer', async(() => {
      // Arrange, Act
      fixture.detectChanges();

      // Assert
      const article_description = fixture.nativeElement.querySelectorAll('.header');
      expect(article_description[0].textContent).toContain('ANGULAR NEWS');
    }));
  });
});
