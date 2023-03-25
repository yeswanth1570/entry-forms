import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
type entryFields =
  {
    fieldName: string,
    fieldDisplayName: string,
    fieldType: string,
    options?: Array<any>,
    templateRefName?: string,
    fieldsArray?: Array<entryFields>,
    props?: {
      defaultvalue?: any,
      formControlOption?: {
        validators?: Validators,
        asyncValidators?: any,
        nonNullable?: boolean,
        updateOn?: 'blur' | 'change' | 'submit'
      },
        formulaconfig?:{
          involvedFields:Array<any>;
          formulaCallback:any;
      }
    };
  }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'entryComp';
  customTemplate = true;
  afterViewRendered = false;

  configJsonArr:Array<entryFields> = [
    {
      fieldName: 'TEXT',
      fieldDisplayName: 'TEXT',
      fieldType: 'TEXT',
      props:{
        defaultvalue:'yesh',
        formControlOption:{
          validators:[Validators.minLength(2)]
        }
      },

    }, {
      fieldName: 'NUMBER',
      fieldDisplayName: 'NUMBER',
      fieldType: 'NUMBER',
      props:{
        defaultvalue:22415736,
        formControlOption:{
          validators:[Validators.required]
        }
      },
    }, {
      fieldName: 'DECIMAL',
      fieldDisplayName: 'DECIMAL',
      fieldType: 'DECIMAL',
      props:{
        // defaultvalue:2
      }
    }, {
      fieldName: 'DATE',
      fieldDisplayName: 'DATE',
      fieldType: 'DATE',
         props:{
        defaultvalue:1673282199287
      }
    }, {
      fieldName: 'DATETIME',
      fieldDisplayName: 'DATETIME',
      fieldType: 'DATETIME'
    },
    {
      fieldName: 'CHECKBOX',
      fieldDisplayName: 'CHECKBOX',
      fieldType: 'CHECKBOX',
      props:{
        defaultvalue:'option1'
      },
      options:['option1','option2','option3','option4','option1','option2','option3','option4','option1','option2','option3','option4']
    },
    {
      fieldName: 'COLOR',
      fieldDisplayName: 'COLOR',
      fieldType: 'COLOR'
    }, {
      fieldName: 'EMAIL',
      fieldDisplayName: 'EMAIL',
      fieldType: 'EMAIL'
    }, {
      fieldName: 'PASSWORD',
      fieldDisplayName: 'PASSWORD',
      fieldType: 'PASSWORD'
    }, {
      fieldName: 'TEXTAREA',
      fieldDisplayName: 'TEXTAREA',
      fieldType: 'TEXTAREA'
    }, {
      fieldName: 'DROPDOWN',
      fieldDisplayName: 'DROPDOWN',
      fieldType: 'DROPDOWN',
      options: ['option1', 'option2', 'option3', 'option4']
    },
    {
      fieldName: 'CUSTOM',
      fieldDisplayName: 'CUSTOM',
      fieldType: 'CUSTOM',
      templateRefName: 'custom1TempRef'
    },
    {
      fieldName: 'FORMULA',
      fieldDisplayName: 'FORMULA',
      fieldType: 'FORMULA',
      props:{
        formulaconfig:{
          involvedFields:['NUMBER','TEXT'],
          formulaCallback:(event:any,args:any)=>{
      this.formGroup.patchValue({'FORMULA':this.count++})
          }
        }
      }
    }, 
    {
      fieldName: 'SPLIT',
      fieldDisplayName: 'SPLIT',
      fieldType: 'SPLIT',
      fieldsArray: [{
        fieldName: 'SplitTEXT1',
        fieldDisplayName: 'SplitTEXT1',
        fieldType: 'TEXT',
        props: {
          defaultvalue: 'SplitTEXT1',
          formControlOption: {
            validators: [Validators.minLength(2)]
          }
        },

      }, {
        fieldName: 'SplitTEXT2',
        fieldDisplayName: 'SplitTEXT2',
        fieldType: 'TEXT',
        props: {
          defaultvalue: 'SplitTEXT2',
          formControlOption: {
            validators: [Validators.minLength(2)]
          }
        },

      }]
    },
     {
      fieldName: 'DECIMAL1',
      fieldDisplayName: 'DECIMAL1',
      fieldType: 'DECIMAL',
      props: {
        defaultvalue: 2
      }
    }

  ]
  count =0;
  submit() {
    console.log(this.formGroup.value)
    this.formGroup.submit()
  }
  ngAfterViewInit(): void {
    this.afterViewRendered = true
  }
  formGroup: any;
  formGroupCreated(e: any) {
    console.log(e.value);
    this.formGroup = e.formGroup
  }
}
