import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";

export class Dataservice implements InMemoryDbService{
    createDb() {
        return {
          employees1:[
            {id:"1",firstname:'John',middlename:'jerry',lastname:'jack', age:34,gender:'Male',Dob:'20-jan-2000',add1:'new york',add2:'USA'},
            {id:"2",firstname:'Mary',middlename:'andrew',lastname:'hack', age:22,gender:'female',Dob:'25-feb-2002',add1:'new york',add2:'USA'},
            {id:"3",firstname:'priya',middlename:'bheem',lastname:'mack',age:45,gender:'female',Dob:'23-mar-2004',add1:'new york',add2:'USA'},
            {id:"4",firstname:'raju',middlename:'ram',lastname:'rack',age:23,gender:'Male',Dob:'21-apr-2005',add1:'new york',add2:'USA'},
            {id:"5",firstname:'pinky',middlename:'shyam',lastname:'pack',age:34,gender:'female',Dob:'22-jun-2003',add1:'new york',add2:'USA'}
            ],
            products:[
                {category:'Fashion',name:'T-shirt',code:1,colour:'black',description:'XL,fabric',price:600,stock:3,image:'https://i.pcmag.com/imagery/articles/07Lgme4Q7ABF0YNKijmwfma-10..v1615827743.jpg'},
                {category:'Electronics',name:'Laptop',code:2,colour:'silver',description:'core i7',price:6000,stock:1,image:'https://i.pcmag.com/imagery/articles/07Lgme4Q7ABF0YNKijmwfma-10..v1615827743.jpg'},
                {category:'Books',name:'The Lost symbol',code:3,colour:'green',description:'with hard cover',price:1000,stock:6,image:'https://i.pcmag.com/imagery/articles/07Lgme4Q7ABF0YNKijmwfma-10..v1615827743.jpg'},
                {category:'Home ',name:'Refrigerator',code:4,colour:'red',description:'Advance cooling ',price:6000,stock:2,image:'https://i.pcmag.com/imagery/articles/07Lgme4Q7ABF0YNKijmwfma-10..v1615827743.jpg'},
                {category:'Accessories',name:'Charger',code:5,colour:'white',description:'Fast charging',price:250,stock:10,image:'https://i.pcmag.com/imagery/articles/07Lgme4Q7ABF0YNKijmwfma-10..v1615827743.jpg'}
            ]
        }
        
    }
}