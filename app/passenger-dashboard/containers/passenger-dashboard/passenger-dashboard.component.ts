import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Passenger } from '../../models/passenger.interface';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
	selector: 'passenger-dashboard',
	styleUrls: ['passenger-dashboard.component.scss'],
	template: `
		<div>
			<passenger-count
				[items]="passengers">
			</passenger-count>
			<div *ngFor="let passenger of passengers">
				{{ passenger.fullName }}
			</div>
			<passenger-detail
				*ngFor="let passenger of passengers"
				[detail]="passenger"
				(view)="handleView($event)"
				(edit)="handleEdit($event)"
				(remove)="handleRemove($event)">
			</passenger-detail>
		</div>
	`
})

export class PassengerDashboardComponent implements OnInit {
	passengers: Passenger[];

	constructor(
		private router: Router,
		private PassengerDashboardService: PassengerDashboardService
	) {}

	public ngOnInit(): void {
		this.PassengerDashboardService
			.getPassengers()
			.subscribe((data: Passenger[]) => {
				this.passengers = data;
			})
	}

	handleRemove(event: Passenger) {
		this.PassengerDashboardService
			.removePassenger(event)
			.subscribe((data: Passenger) => {
				this.passengers = this.passengers.filter((passenger) => passenger.id != event.id);
			});
	}

	handleEdit(event: Passenger) {
		this.PassengerDashboardService
			.updatePassenger(event)
			.subscribe((data: Passenger) => {
				this.passengers = this.passengers.map((passenger: Passenger) => {
					if (passenger.id === event.id) {
						passenger = Object.assign({}, passenger, event);
					}
					return passenger;
				});
			});
	}

	handleView(event: Passenger) {
		this.router.navigate(['/passengers', event.id]);
	}
}
