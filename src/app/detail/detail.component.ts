import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OnSalePipe } from '../on-sale.pipe';
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, OnSalePipe],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  public traiCay2 = [
    { ten: 'Tao', gia: 123, haGia: true },
    { ten: 'Nho', gia: -4, haGia: false },
    { ten: 'Cam', gia: -4, haGia: true },
  ];

  ngOnInit(): void {
    console.log('data = ', this.traiCay2);
  }

}
