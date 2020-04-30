import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodotasksComponent, AddToDoItemDialog } from './todotasks/todotasks.component';
import { HttpClientModule } from '@angular/common/http';
import { ToDoInputItemComponent } from './to-do-input-item/to-do-input-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddtaskinputComponent } from './addtaskinput/addtaskinput.component';
import { DatePipe } from '@angular/common';
import { AdddescriptionComponent } from './adddescription/adddescription.component';
import { ModalModule } from './_modal';

@NgModule({
  declarations: [
    AppComponent,
    AddToDoItemDialog,
    TodotasksComponent,
    ToDoInputItemComponent,
    AddtaskinputComponent,
    AdddescriptionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ModalModule,
    BrowserAnimationsModule
  ],
  providers: [DatePipe, AddtaskinputComponent],
  bootstrap: [AppComponent],
  entryComponents: [AddToDoItemDialog]
})
export class AppModule { }
