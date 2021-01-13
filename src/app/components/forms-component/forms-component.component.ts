import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup,FormArray, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { VirtualTimeScheduler } from 'rxjs';


interface Departments {
  value: string;
  viewValue: string;
}


interface Position {
  value: string;
  viewValue: string;
}

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
  public trainingRForm: FormGroup;
  public trainingArray: FormArray;
  

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

    this.trainingRForm = this._formBuilder.group({
      trainingArray: this._formBuilder.array([this.createTraining()])
    });

    
    
  }


  departments: Departments[] = [
    { value: 'option-1', viewValue: 'Option1' },
    { value: 'option-2', viewValue: 'Option2' },
    { value: 'option-3', viewValue: 'Option3' }
  ];

  position: Position[] = [
    { value: 'option-1', viewValue: 'Option1' },
    { value: 'option-2', viewValue: 'Option2' },
    { value: 'option-3', viewValue: 'Option3' }
  ];
  
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


  get keyTrainingtControl() {
    return this.trainingRForm.get('trainingArray')['controls'];
  }


  createTraining(): FormGroup {
    return this._formBuilder.group({
      institution: '',
      date: '',
      program: ''
    });
  }


  addTraining(): void {
    this.trainingArray = this.trainingRForm.get('trainingArray') as FormArray;
    this.trainingArray.push(this.createTraining());
  }

  removeTraining(i: number) {
    this.trainingArray.removeAt(i);
  }

 
  


}
