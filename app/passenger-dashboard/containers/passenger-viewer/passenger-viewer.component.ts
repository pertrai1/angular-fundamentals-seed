import {
	Component,
	OnInit
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

import 'rxjs/add/operator/switchMap';

import { Passenger } from '../../models/passenger.interface';

@Component({
	selector: 'passenger-viewer',
	styleUrls: ['passenger-viewer.component.scss'],
	template: `
		<div>
			<button (click)="goBack()">
				Go Back
			</button>
			<passenger-form
				[detail]="passenger"
				(update)="onUpdatePassenger($event)">
			</passenger-form>
		</div>
	`
})

export class PassengerViewerComponent implements OnInit {
	passenger: Passenger;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private passengerService: PassengerDashboardService
	) {}

	public ngOnInit(): void {
		this.route.params
			.switchMap((data: Passenger) => this.passengerService.getPassenger(data.id))
			.subscribe((data: Passenger) => this.passenger = data);
	}

	public onUpdatePassenger(event: Passenger) {
		this.passengerService
			.updatePassenger(event)
			.subscribe((data: Passenger) => this.passenger = Object.assign({}, this.passenger, event));
	}

	public goBack() {
		this.router.navigate(['/passengers']);
	}
}
