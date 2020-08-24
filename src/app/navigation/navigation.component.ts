import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  public name: string;
  public subscription: Subscription;

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUrlName();
  }

  public getUrlName(): void {
    this.subscription = this.route.url.subscribe(item => {
      if (item.length) {
        this.name = item[0].path;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
