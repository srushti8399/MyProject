import { AbstractControl } from "@angular/forms";

export class CustomValidator{
    static descriptioncheck(control:AbstractControl):{[key:string]:any}|null
        {const desc:string=control.value;
            if(desc.length>=0 && desc.length<=20){
                return null;
            }
            else{
                return {'descriptionmismatch':true}
              }
            

    }
}
