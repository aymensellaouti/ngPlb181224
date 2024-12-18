import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, FirstComponent, SecondComponent, ColorComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, TwoComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
