import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OnSalePipe } from '../on-sale.pipe';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [CommonModule, FormsModule, OnSalePipe],
})
export class HomeComponent implements OnInit {
  name = 'Duc Dev';
  public age = 0;
  public traiCay = ['Tao', 'Nho', 'Cam'];
  public traiCay2 = [
    { ten: 'Tao', gia: 123, haGia: true },
    { ten: 'Nho', gia: -4, haGia: false },
    { ten: 'Cam', gia: -4, haGia: true },
  ];

  public districts: string[] = ['Quận / Huyện'];
  public vietNamData = [
    { city: 'Tỉnh thành phố:', district: ['Quận / Huyện'] },
    {
      city: 'An Giang',
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: [
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Đất Đỏ',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],
    },
  ];
  constructor() {}
  public ngOnInit(): void {
    console.log('Viet Nam data = ', this.vietNamData);
  }
  public changeCity(event: any): void {
    const city = event.target.value;
    if (!city) {
      return;
    }
    console.log('event', city);
    //Cách 1
    //filter trả về 1 mảng
    // const search = this.vietNamData.filter((data) => data.city === city);
    // console.log('search', search);
    // if (search && search.length > 0) {
    //   this.districts = search[0].district;
    // }

    //Cách 2
    this.districts =
      this.vietNamData
      .find((data) => data.city === city)?.district || []; //?.district || [] đoạn này hiểu là tìm thấy thì return district ngược lại return []
  }
}
