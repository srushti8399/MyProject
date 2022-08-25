import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { CustomValidator } from '../../Validation/Validator';


// interface Icategory {
//   value: string;
//   viewValue: string;
// }


@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {
   category = new FormControl('');
  categoryList: string[] = ['Fashion', 'Electronics', 'Books', 'Home', 'accessories'];



    productForm!:FormGroup;
  
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    // this.productForm= new FormGroup({
    //   category:new FormControl,
    //   name:new FormControl,
    //   description:new FormControl,
    //   code:new FormControl,
    //   colour:new FormControl,
    //   price:new FormControl,
    //   stock:new FormControl,
    //   image:new FormControl,

    // })
    this.productForm= this.fb.group({
      category:["",Validators.required],
    
      name: ["",Validators.required],
      description:["",[Validators.required, CustomValidator.descriptioncheck]],
      code:[null,[Validators.required,Validators.minLength(1),Validators.maxLength(6)]],
      colour: ["",Validators.required],
      price:[null,[Validators.required,Validators.min(200),Validators.max(100000)]],
      stock:[null,[Validators.required,Validators.min(1)]],
      image:["",Validators.required]

    })
  }
  submit(){
    console.log(this.productForm);
  console.log(this.productForm.get('category'));
  console.log(this.productForm.get('category')!.errors);
  console.log(this.productForm.get('category')!.errors!['required']);

  console.log(this.productForm);
  console.log(this.productForm.get('name'));
  console.log(this.productForm.get('name')!.errors);
  console.log(this.productForm.get('name')!.errors!['required'])

  console.log(this.productForm);
  console.log(this.productForm.get('code'));
  console.log(this.productForm.get('code')!.errors);
  console.log(this.productForm.get('code')!.errors!['required']);
  console.log(this.productForm.get('code')!.errors!['minLength']);
  console.log(this.productForm.get('code')!.errors!['maxlength']);

  console.log(this.productForm);
  console.log(this.productForm.get('colour'));
  console.log(this.productForm.get('colour')!.errors);
  console.log(this.productForm.get('colour')!.errors!['required']);

  console.log(this.productForm);
  console.log(this.productForm.get('price'));
  console.log(this.productForm.get('price')!.errors);
  console.log(this.productForm.get('price')!.errors!['required']);
  console.log(this.productForm.get('price')!.errors!['min']);
  console.log(this.productForm.get('price')!.errors!['max']);

  console.log(this.productForm.get('stock'));
  console.log(this.productForm.get('stock')!.errors);
  console.log(this.productForm.get('stock')!.errors!['required']);
  console.log(this.productForm.get('stock')!.errors!['min']);

  console.log(this.productForm.get('image'));
  console.log(this.productForm.get('image')!.errors);
  console.log(this.productForm.get('image')!.errors!['required']);

  console.log(this.productForm.get('description'));
  console.log(this.productForm.get('description')!.errors);
  console.log(this.productForm.get('description')!.errors!['required']);
  
}

}
