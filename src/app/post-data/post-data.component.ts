import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Service/http-server.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-post-data',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './post-data.component.html',
  styleUrl: './post-data.component.css',
})
export class PostDataComponent implements OnInit {
  constructor(private httpServerService: HttpServerService) {}
  ngOnInit(): void {
    const payload = { "body": "Nam nay thanh cong1", "postId": 1 };
    this.httpServerService.postComments(payload).subscribe((data)=>{
      console.log('Post Component: ',data);
    });
  }
}
