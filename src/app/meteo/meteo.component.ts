import { Component, OnInit } from '@angular/core';
import { Meteo } from 'src/app/models/meteo.model';
import { MeteoService } from '../services/meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {

  meteo?: any;

  constructor(private meteoService : MeteoService) { }

  ngOnInit(): void {
    this.getAllinfo();
  }

  getAllinfo(): void {
    this.meteoService.getAll()
      .subscribe(
        data => {
          this.meteo = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
