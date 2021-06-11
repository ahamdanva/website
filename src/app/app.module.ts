import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncryptComponent } from './encrypt/encrypt.component';
import { ContainerComponent } from './container/container.component';
import { IdentifyComponent } from './identify/identify.component';
import { DecryptComponent } from './decrypt/decrypt.component';

@NgModule({
  declarations: [
    AppComponent,
    EncryptComponent,
    ContainerComponent,
    IdentifyComponent,
    DecryptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
