import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  name = 'Duc Dev';
  public age = 0;
  public traiCay = ['Tao', 'Nho','Cam'];
  public traiCay2 = [
    { ten: 'Tao', gia: 123, haGia: true },
    { ten: 'Nho', gia: -4, haGia: false },
    { ten: 'Cam', gia: -4, haGia: true}
  ];

  constructor() {}
  public ngOnInit(): void {
    console.log('Trai cay = ', this.traiCay2);
  }
}
