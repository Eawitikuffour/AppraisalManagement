import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  
 
  }
      emailFormControl = new FormControl('', [
       Validators.required,
       Validators.email,
     ]);

    passwordFormControl = new FormControl('', [
    Validators.required
    
  ]);


}
