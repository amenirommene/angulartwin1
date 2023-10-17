import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SlideComponent } from './slide/slide.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserModule } from './user/user.module';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SlideComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, //par défaut
    AppRoutingModule,
    UserModule
    //FormsModule
  ],
 // providers: [UserService],//équivalent à prividedIn :root
  bootstrap: [AppComponent]
})
export class AppModule { }
