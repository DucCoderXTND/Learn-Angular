import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpServerService } from '../Service/http-server.service';

@Component({
  selector: 'app-get-data',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './get-data.component.html',
  styleUrl: './get-data.component.css',
})
export class GetDataComponent implements OnInit {
  name = 'Duc';
  constructor(private httpServerService: HttpServerService) {}
  public ngOnInit(): void {
    this.httpServerService.getComments().subscribe((data) => {
      console.log('data', data);
    });

    this.httpServerService.getRandomUsers(5).subscribe((data) => {
      console.log('getRandomUsers', data.results);
    });
  }
}
