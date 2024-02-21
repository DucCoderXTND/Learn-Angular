import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
//-tạo mới 1 service: ng generate service Service/Common
//-service là một "cửa hàng" chứa các chức năng, dịch vụ, hoặc dữ liệu mà các phần khác của ứng dụng có thể sử dụng
//-service dùng để gọi web api get cái json
//-Để sử dụng một service trong một component hoặc module, bạn cần "inject" service
//bằng cách khai báo nó trong constructor của thành phần đó: constructor(private myService: MyService) { }
export class CommonService {
  // private counter = 0;
  public counter = 0;
  constructor() {}
  public BinhPhuong(n: number): number {
    return n * n;
  }
  //get set counter khi counter đóng private
  public getCounter(): number {
    return this.counter;
  }
  public setCounter(n: number): void {
    this.counter = n;
  }

  public submitData(data: any): void {
    console.log('Gui data len server, Data = ', data);
  }
}
