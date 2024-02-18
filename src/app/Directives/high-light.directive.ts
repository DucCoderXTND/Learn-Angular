import { Directive, ElementRef, Input } from '@angular/core';

//Câu lệnh tạo directives: ng g d Directives/HighLight
@Directive({
  selector: '[appHighLight]',
  standalone: true,
})
export class HighLightDirective {
  //@Input được sử dụng để tạo một input property cho directive
  //Cú pháp @Input('appHighLight') cho biết rằng bạn có thể sử dụng directive với cú pháp [appHighLight]="someValue"
  @Input('appHighLight') appHighlight = 'red';
  constructor(private el: ElementRef) {
    console.log('HighLightDirective');
    //nếu không được gán, thì sẽ gán giá trị mặc đinhj là red
    this.el.nativeElement.style.color = this.appHighlight;
  }
  ngOnInit(): void {
    console.log('ngOnInit HighLightDirective', this.appHighlight);
    if (!this.appHighlight) {
      //nếu [appHighLight] không được gán giá trị thì nó sẽ gán giá trị mặc định constructor
    } else {
      this.el.nativeElement.style.color = this.appHighlight;
    }
  }
}
