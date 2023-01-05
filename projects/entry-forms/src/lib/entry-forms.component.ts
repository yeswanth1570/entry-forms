
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'entryForms', 
  template: `
  <form [formGroup]="dynaForms">
    <div style="margin: 20px;" fxLayout="column">
        <div *ngFor="let field of globalFieldsArray" class="rows" fxLayout="row" fxFlex="100%" fxLayoutAlign=" center">
            <div style="margin: 2% 0px;" fxLayout="column" fxFlex="{{columnSpace}}%"
                fxLayoutAlign="space-between center" *ngFor="let row of field">
                <ng-container
                    *ngTemplateOutlet="SelectField;context:{$implicit:row,formGroup:dynaForms}"></ng-container>
            </div>
        </div>
    </div>
</form>

<ng-template #SelectField let-field let-formGroup="formGroup">
    <div [ngSwitch]="field.fieldType">
        <div *ngSwitchCase="'TEXT'">
            <ng-container *ngTemplateOutlet="TEXT;context:{$implicit:field,formGroup:formGroup}"></ng-container>
        </div>
        <div *ngSwitchCase="'NUMBER'">
            <ng-container *ngTemplateOutlet="NUMBER;context:{$implicit:field,formGroup:formGroup}"></ng-container>
        </div>
        <div *ngSwitchCase="'DECIMAL'">
            <ng-container *ngTemplateOutlet="DECIMAL;context:{$implicit:field,formGroup:formGroup}"></ng-container>
        </div>
        <div *ngSwitchCase="'DATE'">
            <ng-container *ngTemplateOutlet="DATE;context:{$implicit:field,formGroup:formGroup}"></ng-container>
        </div>
        <div *ngSwitchCase="'DATETIME'">
            <ng-container *ngTemplateOutlet="DATETIME;context:{$implicit:field,formGroup:formGroup}"></ng-container>
        </div>
        <div *ngSwitchCase="'COLOR'">
            <ng-container *ngTemplateOutlet="COLOR;context:{$implicit:field,formGroup:formGroup}"></ng-container>
        </div>
        <div *ngSwitchCase="'EMAIL'">
            <ng-container *ngTemplateOutlet="EMAIL;context:{$implicit:field,formGroup:formGroup}"></ng-container>
        </div>
        <div *ngSwitchCase="'PASSWORD'">
            <ng-container *ngTemplateOutlet="PASSWORD;context:{$implicit:field,formGroup:formGroup}"></ng-container>
        </div>
        <div *ngSwitchCase="'TEXTAREA'">
            <ng-container *ngTemplateOutlet="TEXTAREA;context:{$implicit:field,formGroup:formGroup}"></ng-container>
        </div>
        <div *ngSwitchCase="'DROPDOWN'">
            <ng-container *ngTemplateOutlet="DROPDOWN;context:{$implicit:field,formGroup:formGroup}"></ng-container>
        </div>
        <div *ngSwitchCase="'RADIO'">
            <ng-container *ngTemplateOutlet="RADIO;context:{$implicit:field,formGroup:formGroup}"></ng-container>
        </div>
        <div *ngSwitchCase="'CUSTOM'">
            <ng-container *ngTemplateOutlet="CUSTOMTEMPLATE[field.templateRefName];context:{$implicit:field,formGroup:formGroup}"></ng-container>
        </div>
    </div>
</ng-template>

<ng-template let-fieldInfo let-formGroup="formGroup" #TEXT>
    <div [formGroup]="formGroup">
        <mat-form-field appearance="outline">
            <mat-label>{{fieldInfo.fieldDisplayName}}</mat-label>
            <input matInput type="text" placeholder="{{fieldInfo.fieldDisplayName}}"
                [formControlName]="fieldInfo.fieldName">
        </mat-form-field>
    </div>

</ng-template>
<ng-template let-fieldInfo let-formGroup="formGroup" #NUMBER>
    <div [formGroup]="formGroup">
        <mat-form-field appearance="outline">
            <mat-label>{{fieldInfo.fieldDisplayName}}</mat-label>
            <input matInput type="number" placeholder="{{fieldInfo.fieldDisplayName}}"
                [formControlName]="fieldInfo.fieldName">
        </mat-form-field>
    </div>
</ng-template>
<ng-template let-fieldInfo let-formGroup="formGroup" #DECIMAL>
    <div [formGroup]="formGroup">
        <mat-form-field appearance="outline">
            <mat-label>{{fieldInfo.fieldDisplayName}}</mat-label>
            <input matInput type="number" placeholder="{{fieldInfo.fieldDisplayName}}"
                [formControlName]="fieldInfo.fieldName">
        </mat-form-field>
    </div>
</ng-template>
<ng-template let-fieldInfo let-formGroup="formGroup" #DATE>
    <div [formGroup]="formGroup">
        <mat-form-field appearance="outline">
            <mat-label>{{fieldInfo.fieldDisplayName}}</mat-label>
            <input matInput type="date" placeholder="{{fieldInfo.fieldDisplayName}}"
                formControlName="{{fieldInfo.fieldName}}">
        </mat-form-field>
    </div>
</ng-template>
<ng-template let-fieldInfo let-formGroup="formGroup" #DATETIME>
    <div [formGroup]="formGroup">
        <mat-form-field appearance="outline">
            <mat-label>{{fieldInfo.fieldDisplayName}}</mat-label>
            <input matInput type="datetime-local" placeholder="{{fieldInfo.fieldDisplayName}}"
                formControlName="{{fieldInfo.fieldName}}">
        </mat-form-field>
    </div>
</ng-template>
<ng-template let-fieldInfo let-formGroup="formGroup" #COLOR>
    <div [formGroup]="formGroup">
        <mat-form-field appearance="outline">
            <mat-label>{{fieldInfo.fieldDisplayName}}</mat-label>
            <input matInput type="color" placeholder="{{fieldInfo.fieldDisplayName}}"
                formControlName="{{fieldInfo.fieldName}}">
        </mat-form-field>
    </div>
</ng-template>
<ng-template let-fieldInfo let-formGroup="formGroup" #EMAIL>
    <div [formGroup]="formGroup">
        <mat-form-field appearance="outline">
            <mat-label>{{fieldInfo.fieldDisplayName}}</mat-label>
            <input matInput type="email" placeholder="{{fieldInfo.fieldDisplayName}}"
                formControlName="{{fieldInfo.fieldName}}">
        </mat-form-field>
    </div>
</ng-template>
<ng-template let-fieldInfo let-formGroup="formGroup" #PASSWORD>
    <div [formGroup]="formGroup">
        <mat-form-field appearance="outline">
            <mat-label>{{fieldInfo.fieldDisplayName}}</mat-label>
            <input matInput [type]="'password'" placeholder="{{fieldInfo.fieldDisplayName}}"
                formControlName="{{fieldInfo.fieldName}}">
        </mat-form-field>
    </div>
</ng-template>
<ng-template let-fieldInfo let-formGroup="formGroup" #TEXTAREA>
    <div [formGroup]="formGroup">
        <mat-form-field appearance="outline">
            <mat-label>{{fieldInfo.fieldDisplayName}}</mat-label>
            <textarea matInput placeholder="{{fieldInfo.fieldDisplayName}}"
                formControlName="{{fieldInfo.fieldName}}"></textarea>
        </mat-form-field>
    </div>
</ng-template>
<ng-template let-fieldInfo let-formGroup="formGroup" #DROPDOWN>
    <div [formGroup]="formGroup">
        <mat-form-field appearance="outline">

            <mat-select placeholder="{{fieldInfo.fieldDisplayName}}" formControlName="{{fieldInfo.fieldName}}">
                <mat-option *ngFor="let option of fieldInfo.options;" [value]="option">{{option}}</mat-option>
            </mat-select>
        </mat-form-field>
    </div>
</ng-template>
<ng-template let-fieldInfo let-formGroup="formGroup" #RADIO>
    <div [formGroup]="formGroup">
        <mat-label>{{fieldInfo.fieldDisplayName}}</mat-label>
        <mat-radio-group formControlName="{{fieldInfo.fieldName}}">
            <mat-radio-button *ngFor="let option of fieldInfo.options;" [value]="option">{{option}}</mat-radio-button>
        </mat-radio-group>
    </div>
</ng-template>
  `,
  styleUrls: ["entry-forms.component.scss"]
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
  /**
   * method is used to dynamically create a formGroup
   */
  createFormGroup(fieldsArray: Array<any>) {
    let forms: any = {}
    fieldsArray.forEach((fields) => {
      if(fields['fieldType'] === 'CHECKBOX'){
        forms[fields['fieldName']] = new FormControl(Object.keys(fields['options']).map((option:any)=>{return option}))
      }else{
        forms[fields['fieldName']] = new FormControl('');
      } 
    })
    this.dynaForms = new FormGroup(forms)
    this.formGroup.emit({formGroup:this.dynaForms})
  }
 

  @Output() formGroup: EventEmitter<any> = new EventEmitter()
  @Input() dynaFields :any;
  @Input() columns :number = 3;
  @Input()
  CUSTOMTEMPLATE!: any;
  columnSpace = 100 / 3
  constructor() {

  }

  ngOnInit(): void {
    this.columnSpace = 100 / Math.floor(this.columns)
    this.createFormGroup(this.dynaFields)
    this.reorderingFields(this.dynaFields, this.columns)
  }
}
