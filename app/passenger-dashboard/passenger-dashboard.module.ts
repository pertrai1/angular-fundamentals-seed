import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { PassengerDashboardService } from './passenger-dashboard.service';

import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

const routes: Routes = [
	{
		path: 'passengers',
		children: [
			{
				path: '', component: PassengerDashboardComponent
			},
			{
				path: ':id', component: PassengerViewerComponent
			}
		]
	}
];

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
		FormsModule,
		RouterModule.forChild(routes)
	],
	providers: [
		PassengerDashboardService
	]
})

export class PassengerDashboardModule {}
