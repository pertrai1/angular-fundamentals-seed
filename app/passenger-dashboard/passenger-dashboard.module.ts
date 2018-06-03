import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { PassengerDashboardService } from './passenger-dashboard.service';

import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

@NgModule({
	declarations: [
		PassengerDashboardComponent,
		PassengerCountComponent,
		PassengerDetailComponent
	],
	imports: [
		CommonModule,
		HttpModule
	],
	exports: [
		PassengerDashboardComponent
	],
	providers: [
		PassengerDashboardService
	]
})

export class PassengerDashboardModule {}
