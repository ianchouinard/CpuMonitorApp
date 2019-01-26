import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule, MatSidenav, MatSidenavModule, MatMenuModule, MatButtonModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { StandardErrorInterceptor } from './interceptors/standard-error-interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: StandardErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
