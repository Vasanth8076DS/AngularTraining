import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormsModule } from '@angular/forms';
import { UsermanagementModule } from './usermanagement/usermanagement.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UsermanagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
