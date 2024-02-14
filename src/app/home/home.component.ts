import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OnSalePipe } from "../on-sale.pipe";
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, FormsModule, OnSalePipe]
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
