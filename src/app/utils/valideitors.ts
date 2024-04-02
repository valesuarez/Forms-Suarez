import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const soloGmailValidator:ValidatorFn=(control:AbstractControl): ValidationErrors | null=>{
    if (typeof control.value === 'string' && !control.value.includes('@gmail.com') ){
         return{
            soloGmail:true
         }
    }
return null
};