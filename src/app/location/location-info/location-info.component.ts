import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocationService } from '../location.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.scss']
})
export class LocationInfoComponent implements OnInit, OnDestroy {
  public data: Observable<any>;
  public routeSubscription: Subscription;
  public id: number;

  constructor(private locationService: LocationService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.showData();
    this.getUrlId();
  }

  public showData(): void {
    this.data = this.locationService.data;
  }

  public getUrlId(): void {
    this.routeSubscription = this.route.children[0].url.subscribe(item => this.id = +item[0].path);
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
