import { HttpclientModule } from '@angular/http';
// import { ApiService } from './api-http/api.service';
import { NgModule } from '@angular/core';
import {ProfileComponent} from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
