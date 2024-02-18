import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from "../home/home.component";
@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule, HomeComponent]
})
export class AboutComponent implements OnInit {
  public loginName = 'admin';
  constructor() {}
  ngOnInit(): void {}
}
