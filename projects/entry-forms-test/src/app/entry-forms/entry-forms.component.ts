import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModules } from '../../material.module';
@Component({
  selector: 'app-entry',
  standalone: true,
  imports: [CommonModule, BrowserModule, FlexLayoutModule, MaterialModules, ReactiveFormsModule, FormsModule],
  templateUrl: './entry-forms.component.html',
  styleUrls: ['./entry-forms.component.scss']
})
export class EntryFormsComponent implements OnInit {

  globalFieldsArray: any = []
  /**
   * method is used to arrange the input fields based on number of columns
   * @param fieldsArray json array for input fields
   * @param cols number of columns
   */
  reorderingFields(fieldsArray: Array<any>, cols: number) {
    this.globalFieldsArray = []
    let tempDataArray: Array<any> = []
    let count = 0;

    fieldsArray.forEach((field, index) => {
      tempDataArray.push(field);
      count++;
      if (count === cols) {
        this.globalFieldsArray.push(tempDataArray)
        tempDataArray = [];
        count = 0;
        return;
      }
      else if (index === fieldsArray.length - 1) {
        this.globalFieldsArray.push(tempDataArray)
        tempDataArray = [];
        count = 0;
        return;
      }
    })

    console.log(this.globalFieldsArray)
  }
  dynaForms!: FormGroup<any>;
  checkForFormGroupCreation:boolean = false;
  /**
   * method is used to dynamically create a formGroup
   */
  createFormGroup(fieldsArray: Array<any>) {
    let forms: any = {}
    fieldsArray.forEach((fields) => {
      if(!(fields?.formControlOption)){
        fields.formControlOption={}
      }
      forms[fields['fieldName']] = new FormControl('',fields.formControlOption);
      
    })
    this.dynaForms = new FormGroup(forms)
    this.formGroup.emit({formGroup:this.dynaForms})
  }
 
  /**
   * method is called when form is submitted
   * @param form 
   */
  // onSubmit(form: FormGroup) {
  //   this.onSubmitButtonClicked.emit({form:form})
  // }

  @Output() onSubmitButtonClicked: EventEmitter<any> = new EventEmitter()
  @Output() formGroup: EventEmitter<any> = new EventEmitter()
  @Input() dynaFields :any;
  @Input() columns :number = 3;
  @Input()
  CUSTOMTEMPLATE!: any;
  columnSpace = 100 / 3
  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.columnSpace = 100 / Math.floor(this.columns)
    this.createFormGroup(this.dynaFields)
    this.reorderingFields(this.dynaFields, this.columns)
  }
}
