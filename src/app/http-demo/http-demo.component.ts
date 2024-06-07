import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent implements OnInit {
  data: any;
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get(this.apiUrl).subscribe(response => {
      this.data = response;
      console.log('GET Response:', this.data);
    });
  }

  postData() {
    const newPost = { title: 'foo', body: 'bar', userId: 1 };
    this.http.post(this.apiUrl, newPost).subscribe(response => {
      console.log('POST Response:', response);
    });
  }

  putData() {
    const updatedPost = { id: 1, title: 'foo', body: 'bar', userId: 1 };
    this.http.put(`${this.apiUrl}/1`, updatedPost).subscribe(response => {
      console.log('PUT Response:', response);
    });
  }

  deleteData() {
    this.http.delete(`${this.apiUrl}/1`).subscribe(response => {
      console.log('DELETE Response:', response);
    });
  }
}
