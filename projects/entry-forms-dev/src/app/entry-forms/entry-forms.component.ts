import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModules } from '../../material.module';
import { zipWith } from 'lodash-es';
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
  checkForFormGroupCreation: boolean = false;
  /**
   * method is used to dynamically create a formGroup
   */
  createFormGroup(fieldsArray: Array<any>) {
    this.dynaForms = new FormGroup({})
    let forms: any = {}
    let defaultvalue = ''
    let formGroupValidation = {}
    fieldsArray.forEach((fields) => {

      let formGroupCreation = (fieldInfo:any) => {
        defaultvalue = fieldInfo?.props?.defaultvalue !== null ? fieldInfo?.props?.defaultvalue : undefined;
        formGroupValidation = fieldInfo?.props?.formControlOption !== null ? fieldInfo?.props?.formControlOption : {}
        forms[fieldInfo['fieldName']] = new FormControl(defaultvalue, formGroupValidation);
        if (fieldInfo?.fieldType === 'FORMULA') {
          let involvedFields = fieldInfo?.props?.formulaconfig.involvedFields ? fieldInfo?.props?.formulaconfig.involvedFields : []
          involvedFields.map((operands: any) => this.involvedFields[operands] ? this.involvedFields[operands].push(fieldInfo) : this.involvedFields[operands] = [fieldInfo])
        }
        this.dynaForms.setControl(fieldInfo['fieldName'], new FormControl(defaultvalue, formGroupValidation))
      };
      fields?.fieldType === 'SPLIT' ? fields.fieldsArray.map((splitFields:any) =>{formGroupCreation(splitFields);}) : formGroupCreation(fields);
    })
    // this.dynaForms = new FormGroup(forms)
    this.formGroup.emit({ formGroup: this.dynaForms })
  }
involvedFields:any={}
  changeCallback(event: any, formField: any) {
    console.log(event,this.involvedFields);
    this.involvedFields[formField['fieldName']].map((formulaField:any)=>{
      let args ={
        formulaField:formulaField,
        updatedField:formField,
        formGroup:this.dynaForms
      }
      formulaField['props']['formulaconfig']['formulaCallback'](event,args)
    })

  }
  @Output() onSubmitButtonClicked: EventEmitter<any> = new EventEmitter()
  @Output() formGroup: EventEmitter<any> = new EventEmitter()
  @Input() dynaFields: any;
  @Input() columns: number = 3;
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
