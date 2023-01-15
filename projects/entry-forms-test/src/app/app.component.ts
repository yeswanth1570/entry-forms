import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
type entryFields = {
  fieldName: string;
  fieldDisplayName: string;
  fieldType: string;
  options?: Array<any>;
  templateRefName?: string;
  formControlOption?: {
    validators?: Validators;
    asyncValidators?: any;
    nonNullable?: boolean;
    updateOn?: 'blur' | 'change' | 'submit';
  };
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Angular';
  title = 'entryComp';
  afterViewRendered = false;

  configJson: Array<entryFields> = [
    {
      fieldName: 'TEXT',
      fieldDisplayName: 'TEXT',
      fieldType: 'TEXT',
      formControlOption: {
        validators: [Validators.required],
      },
    },
    {
      fieldName: 'NUMBER',
      fieldDisplayName: 'NUMBER',
      fieldType: 'NUMBER',
    },
    {
      fieldName: 'DECIMAL',
      fieldDisplayName: 'DECIMAL',
      fieldType: 'DECIMAL',
    },
    {
      fieldName: 'DATE',
      fieldDisplayName: 'DATE',
      fieldType: 'DATE',
    },
    {
      fieldName: 'DATETIME',
      fieldDisplayName: 'DATETIME',
      fieldType: 'DATETIME',
    },
    {
      fieldName: 'COLOR',
      fieldDisplayName: 'COLOR',
      fieldType: 'COLOR',
    },
    {
      fieldName: 'EMAIL',
      fieldDisplayName: 'EMAIL',
      fieldType: 'EMAIL',
    },
    {
      fieldName: 'PASSWORD',
      fieldDisplayName: 'PASSWORD',
      fieldType: 'PASSWORD',
    },
    {
      fieldName: 'TEXTAREA',
      fieldDisplayName: 'TEXTAREA',
      fieldType: 'TEXTAREA',
    },
    {
      fieldName: 'DROPDOWN',
      fieldDisplayName: 'DROPDOWN',
      fieldType: 'DROPDOWN',
      options: ['option1', 'option2', 'option3', 'option4'],
    },
    {
      fieldName: 'CHECKBOX',
      fieldDisplayName: 'CHECKBOX',
      fieldType: 'CHECKBOX',
      options: ['option1', 'option2', 'option3', 'option4'],
    },
    {
      fieldName: 'CUSTOM',
      fieldDisplayName: 'CUSTOM',
      fieldType: 'CUSTOM',
      templateRefName: 'custom',
    },
  ];

  ngAfterViewInit(): void {
    this.afterViewRendered = true;
  }
  formGroup: any;
  formGroupCreated(formGroupvalue: any) {
    console.log(formGroupvalue.formGroup.value);
    this.formGroup = formGroupvalue.formGroup;
  }
}
