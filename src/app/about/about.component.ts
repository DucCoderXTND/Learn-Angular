import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { HighLightDirective } from '../Directives/high-light.directive';
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
  public loginName = 'admin';
  constructor() {}
  ngOnInit(): void {}
}
