import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { FormsModule } from '@angular/forms';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { PereComponent } from './communicationInterComposants/pere/pere.component';
import { FilsComponent } from './communicationInterComposants/fils/fils.component';

@NgModule({
  declarations: [AppComponent, FirstComponent, SecondComponent, ColorComponent, RotatingCardComponent, PereComponent, FilsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, TwoComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
