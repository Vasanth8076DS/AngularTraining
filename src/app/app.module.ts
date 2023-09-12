import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HelloWorldComponent } from "./hello-world/hello-world.component";
import { FormsModule } from "@angular/forms";
import { FormComponent } from "./form/form.component";
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [AppComponent, HelloWorldComponent,FormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,MatTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
