import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  dataList: any = [];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getData().subscribe({
      next: (dataResponse) => {
        this.dataList = dataResponse;
        console.log(dataResponse);
        localStorage.setItem('data', JSON.stringify(dataResponse));
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
