import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { PassengerDashboardService } from './passenger-dashboard.service';

import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

@NgModule({
	declarations: [
		PassengerDashboardComponent,
		PassengerFormComponent,
		PassengerViewerComponent,
		PassengerCountComponent,
		PassengerDetailComponent
	],
	imports: [
		CommonModule,
		HttpModule,
		FormsModule
	],
	exports: [
		PassengerViewerComponent
	],
	providers: [
		PassengerDashboardService
	]
})

export class PassengerDashboardModule {}
