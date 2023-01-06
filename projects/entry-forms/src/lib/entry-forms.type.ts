import { Validators } from '@angular/forms';
export class entryFields  
{
    fieldName!: string;
    fieldDisplayName!: string;
    fieldType!: string;
    options?:Array<any>;
    templateRefName?:string;
    formControlOption?:{
      validators?:Validators;
      asyncValidators?:any;
      nonNullable?:boolean;
      updateOn?:'blur'|'change'|'submit';
    }
}