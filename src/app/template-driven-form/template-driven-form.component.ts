import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css',
})
export class TemplateDrivenFormComponent implements OnInit {
  public name = '';
  public age = 0;
  constructor(private common: CommonService) {}
  ngOnInit(): void {}
  public submitForm(): void {
    // console.log('Submit form: name = ' + this.name);
    this.common.submitData({name: this.name, age: this.age});
  }
}
