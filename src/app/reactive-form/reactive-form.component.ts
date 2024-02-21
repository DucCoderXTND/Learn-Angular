import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonService } from '../Service/common.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent implements OnInit {

  //using FormGroup
  public formData: FormGroup = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
  });

  //using FormBuilder
  public formDataTwo = this.formBulider.group({
    name: ['',Validators.required],
    age: ['',Validators.required],
  })

  constructor(private common:CommonService, private formBulider: FormBuilder) {}
  ngOnInit(): void {}
  public submitForm(): void {
    // console.log('Submit form: formData = ', this.formData.value);
    // this.common.submitData(this.formData.value);
    this.common.submitData(this.formDataTwo.value);
  }
}
