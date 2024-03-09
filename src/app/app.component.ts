import { Component, OnInit } from '@angular/core';
import { ApiService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  data: any;
  constructor(private apiService: ApiService) { }
  city: string = "Delhi";

  getWeatherData(city: string) {
    this.apiService.getData(city).subscribe(
      (res) => {
        this.data = res;
        console.log(this.data.currentConditions)
      }
    )
  }

  onSubmit() {
    this.getWeatherData(this.city)
    this.city = ""
  }

  ngOnInit(): void {
    this.getWeatherData(this.city)
  }
}
