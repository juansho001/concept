import { Component, OnInit } from '@angular/core';
import { Car } from '../api/car';
import { CarService } from '../api/carservice';
import { BaseRequestOptions,
         ConnectionBackend,
         Http } from '@angular/http';



@Component({
  selector: 'app-table',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
  providers: [ CarService, {
        provide: Http,
        useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
          return new Http(backend, defaultOptions);
        },
        deps: []
      } ]
})

export class TableComponent implements OnInit {

    cars: Car[];
    loading: boolean;

    constructor(private carService: CarService) { }

    ngOnInit() {
      this.loading = true;
        setTimeout(() => {
            this.carService.getCarsSmall().then(cars => this.cars = cars);
            this.loading = false;
        }, 1000);
    }
}
