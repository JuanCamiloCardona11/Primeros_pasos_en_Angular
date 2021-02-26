import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavegationComponent } from './components/nav-bar/navegation.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { DivisionComponent } from './components/division/division.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavegationComponent,
    BodyComponent,
    FooterComponent,
    DivisionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
