import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { YagaModule } from '@yaga/leaflet-ng2';

import { MapExampleComponent } from './map-example/map-example.component';

@NgModule({
  declarations: [
    AppComponent,
    MapExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    YagaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
