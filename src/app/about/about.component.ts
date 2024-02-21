import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { HighLightDirective } from '../Directives/high-light.directive';
import { CommonService } from '../Service/common.service';
@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule, HomeComponent,HighLightDirective]
})
export class AboutComponent implements OnInit {
  public myColorBlue = 'blue';
  public myColorGreen = 'green';
  public loginName = 'user';
  public couter = 0;
  public counterBinhPhuong = 0;
  constructor(private common: CommonService) {}

  ngOnInit(): void {
    this.couter = this.common.counter;
    this.counterBinhPhuong = this.common.BinhPhuong(this.couter);
    this.common.counter++;
  }
}
