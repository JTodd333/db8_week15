import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VgDetailComponent } from './vg-detail/vg-detail.component';
import { VgListComponent } from './vg-list/vg-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VgDetailComponent,
    VgListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
