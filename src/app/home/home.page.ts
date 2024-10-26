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
    // nos suscribimos al observable
    this.apiService.getData().subscribe({
      next: (dataResponse) => {
        //asignamos los datos al arreglo vacio
        this.dataList = dataResponse;
        console.log(dataResponse);
        // guardamos los datos en el almacenamiento local
        localStorage.setItem('data', JSON.stringify(dataResponse));
      },
      // controlamos los errores
      error: (error) => {
        console.log(error);
      },
    });
  }
}
