import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrentSystemComponent } from './components/current-system/current-system.component';
import {CurrentSystemService} from "./services/current-system-service";

@NgModule({
  declarations: [
    AppComponent,
    CurrentSystemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CurrentSystemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
