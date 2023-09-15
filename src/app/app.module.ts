import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltersValidatorsComponent } from './filters-validators/filters-validators.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    FiltersValidatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
