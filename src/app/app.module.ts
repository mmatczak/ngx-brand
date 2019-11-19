import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemedDialogComponent } from './themed-dialog/themed-dialog.component';
import { DialogAComponent } from './dialog-a/dialog-a.component';
import { DialogBComponent } from './dialog-b/dialog-b.component';
import { DialogDispatcherComponent } from './dialog-dispatcher/dialog-dispatcher.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemedDialogComponent,
    DialogAComponent,
    DialogBComponent,
    DialogDispatcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
