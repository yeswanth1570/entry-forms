import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EntryFormsComponent } from './entry-forms.component';
import { EntryFormsService } from './entry-forms.service';
import { entryFields } from './entry-forms.type';
import { MaterialModules } from './material.module';



@NgModule({
  declarations: [
    EntryFormsComponent
  ],
  imports: [CommonModule, BrowserModule, FlexLayoutModule, MaterialModules, ReactiveFormsModule, FormsModule],
  exports: [
    EntryFormsComponent
  ],
  providers:[EntryFormsService,]
})
export class EntryFormsModule { }
