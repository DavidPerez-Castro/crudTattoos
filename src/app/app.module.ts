import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NewTattooComponent } from './components/new-tattoo/new-tattoo.component';
import { ListTattooComponent } from './components/list-tattoo/list-tattoo.component';
import { TattooCardComponent } from './components/tattoo-card/tattoo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTattooComponent,
    ListTattooComponent,
    TattooCardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'your-app-id' }),
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private http: HttpClient) {
    // Configura HttpClient para usar fetch solo en el navegador
    if (typeof window !== 'undefined') {
      http.constructor.prototype.fetch = window.fetch.bind(window);
    }
  }
}
