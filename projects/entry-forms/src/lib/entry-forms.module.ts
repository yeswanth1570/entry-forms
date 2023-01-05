import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EntryFormsComponent } from './entry-forms.component';
import { MaterialModules } from './material.module';



@NgModule({
  declarations: [
    EntryFormsComponent
  ],
  imports: [CommonModule, BrowserModule, FlexLayoutModule, MaterialModules, ReactiveFormsModule, FormsModule],
  exports: [
    EntryFormsComponent
  ]
})
export class EntryFormsModule { }
