import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup,FormArray, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-forms-component',
  templateUrl: './forms-component.component.html',
  styleUrls: ['./forms-component.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
  }]
})
export class FormsComponent implements OnInit {
  personalInformation: FormGroup;
  public performancePlanning: FormGroup;
  public keyAreaFormArray: FormArray;

  constructor(private _formBuilder: FormBuilder) { 
    this.performancePlanning = this._formBuilder.group({
      keyAreaFormArray: this._formBuilder.array([this.createPerformancePlanning()])

    });
  }

  ngOnInit() {

   // this.keyAreaFormArray = this._formBuilder.array([]);

    //this.addKeyResearchArea();

    this.personalInformation = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });


    
  }

  

  get keyResultControl() {
    return this.performancePlanning.get('keyAreaFormArray')['controls'];
  }


  createPerformancePlanning(): FormGroup{
    return this._formBuilder.group({
      keyResultsArea: '',
      targets: '',
      resourcesRequired: ''
    });
  }


  addPerformancePlanning(): void{
    this.keyAreaFormArray = this.performancePlanning.get('keyAreaFormArray') as FormArray;
    this.keyAreaFormArray.push(this.createPerformancePlanning());
  }

  removePerformancePlanning(i: number) {
    this.keyAreaFormArray.removeAt(i);
  }

 
}
