import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  name = 'Duc Dev';
  public age = 0;
  
  constructor(){}
  ngOnInit(): void {
    
  }

  public resetName():void{
    console.log('resetName');
    this.name = '';
  }

  
}
