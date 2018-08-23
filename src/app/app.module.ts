import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';
import {ProfileComponent} from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import {BrowserModule}from '@angular/platform-browser'
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
