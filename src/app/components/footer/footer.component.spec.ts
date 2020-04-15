import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
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
      const article_description = fixture.nativeElement.querySelectorAll(
        'footer'
      );
      expect(article_description[0].textContent).toContain(
        'Developed by Steven Martin'
      );
    }));
  });
});
