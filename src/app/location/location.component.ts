import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocationService } from './location.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit, OnDestroy {
  public locations: Array<any>;
  public subscription: Subscription;
  public currentName: string;
  public currentText: string;
  public mockedData = {
    name: '2263  Better Street, Kansas City',
    value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce placerat metus vel dapibus dictum. Donec gravida egestas
            leo sollicitudin pretium. Nulla sem massa, ornare ac maximus a,
            vestibulum eget massa. Ut vel purus tempor, viverra orci nec,
            placerat felis. Phasellus euismod ligula vel sem tincidunt finibus.
            Ut at lacinia risus. Mauris feugiat tempor sem at ullamcorper.
            Fusce at metus finibus, consequat odio at, finibus sem. Nam volutpat
            est ac dolor pharetra pellentesque. Fusce quis finibus velit, ac
            malesuada lectus. Phasellus sit amet nibh euismod, dapibus enim
            at, tempus risus.`
  };

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.showData();
  }

  public showData(): void {
    this.subscription = this.locationService.data.subscribe(location => {
      location.map(item => this.locations = item.location);
    });
  }

  public changeLocation(i) {
    this.locations.map(item => {
      if (i.name === item.name) {
        this.currentName = i.name;
        this.currentText = i.value;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
