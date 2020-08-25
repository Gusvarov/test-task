import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LocationInfoComponent } from './location/location-info/location-info.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'location', component: LocationComponent,
    children: [
      { path: ':id', component: LocationInfoComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
