import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { FooterComponent } from './components/footer/footer.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { ArticleService } from './services/article.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    FooterComponent,
    TimeAgoPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
