import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup,FormArray, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ActivatedRoute } from '@angular/router';


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
  styleUrls: ['./forms-component.component.css']
})
export class FormsComponent implements OnInit {
  // personalInformation: FormGroup  ;

  personalInformation = new FormGroup({
    
  });

   public performancePlanning: FormGroup;



  public keyAreaFormArray: FormArray;

  hash: string; 
  showForm = false;
  i: number;

  constructor(private _formBuilder: FormBuilder, private route: ActivatedRoute, private cdref: ChangeDetectorRef) { 
    this.performancePlanning = this._formBuilder.group({
      keyAreaFormArray: this._formBuilder.array([this.createPerformancePlanning()])

    });
  }

  ngOnInit() {

   // this.keyAreaFormArray = this._formBuilder.array([]);

    //this.addKeyResearchArea();
    this.route.params.subscribe(params => {
      if (params) {
           this.hash = params.hash;
           if(params.hash === '12345'){
             this.showForm = true;
             this.initializeForm();
             this.cdref.detectChanges();
           }
      }
    })

    // this.i === 0;
    
    
  }

  initializeForm() {

    this.personalInformation = this._formBuilder.group({
      firstName: new FormControl('',Validators.required),
      surname: new FormControl('', Validators.required),
      other: new FormControl(''),
      position: new FormControl(''),
      department: new FormControl('', Validators.required),
      appointmentDate: new FormControl('', Validators.required),
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
      keyResultsArea: new FormControl('',Validators.required),
      targets: new FormControl('', Validators.required),
      resourcesRequired: new FormControl('',Validators.required),
    });
  }


  addPerformancePlanning(): void{
    this.keyAreaFormArray = this.performancePlanning.get('keyAreaFormArray') as FormArray;
    this.keyAreaFormArray.push(this.createPerformancePlanning());
  }

  removePerformancePlanning(i: number) {
    this.keyAreaFormArray.removeAt(i);
    console.log(i)
  }


  onClick(){

    console.log(this.personalInformation.value);
    console.log(this.performancePlanning.value);
  }
  

}
