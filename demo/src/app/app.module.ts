import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}    from '@angular/forms';
import {CommonModule} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DropdownModule, DataTableModule, SharedModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import { TableComponent } from './datatable/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule, CommonModule, FormsModule,BrowserAnimationsModule, DropdownModule, DataTableModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
