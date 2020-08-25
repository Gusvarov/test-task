import { Component, OnInit } from '@angular/core';
import { LocationService } from './location.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  public locations: Array<any>;
  public data: Observable<any>;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.showData();
  }

  public showData(): void {
    this.data = this.locationService.data;
  }
}
