import { Component, OnInit } from '@angular/core';
import {BackendService} from '../backend.service';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';


@Component({
  selector: 'app-demoform',
  templateUrl: './demoform.component.html',
  styleUrls: ['./demoform.component.css']
})
export class DemoformComponent implements OnInit {
  formEx:FormGroup;
  validation_msg={
    'name':[
      {type:'required',message:'Email is required.'}

    ]

  }
  constructor(private fb: FormBuilder,private backendService:BackendService) { }

  ngOnInit() {
    this.createForm();
  }

createForm(){
  this.formEx = this.fb.group({
    name:['',Validators.required],
    surname:['',Validators.required],
    email:['',Validators.required],
    company:['',Validators.required],
    website:['',Validators.required],
    employess:['',Validators.required],
    industry:['',Validators.required],
    country:['',Validators.required],
    phone:['',Validators.required],
    title:['',Validators.required],
    companyRevenue:['',Validators.required]

  })
}

resetFields(){

   this.formEx = this.fb.group({
     name: new FormControl('', Validators.required),
     surname: new FormControl('', Validators.required),
     email: new FormControl('', Validators.required),
     company: new FormControl('', Validators.required),
     website: new FormControl('', Validators.required),
     employess: new FormControl('', Validators.required),
     industry: new FormControl('', Validators.required),
     country: new FormControl('', Validators.required),
     phone: new FormControl('', Validators.required),
     title: new FormControl('', Validators.required),
     companyRevenue: new FormControl('', Validators.required)
   });
 }
onSubmit(value){
this.backendService.addUser(value)
.then(res=>{
  this.resetFields();
  window.location.href = 'https://hootsuite.com/request-demo/thank-you';
})

}

}
