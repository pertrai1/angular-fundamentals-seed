import { Component, OnInit } from '@angular/core';

import { Passengers } from '../../models/passenger.interface';

@Component({
	selector: 'passenger-dashboard',
	styleUrls: ['passenger-dashboard.component.scss'],
	template: `
		<div>
			<passenger-count></passenger-count>
			<passenger-detail></passenger-detail>
			<h3>Airline Passengers</h3>
			<ul>
				<li *ngFor="let passenger of passengers; let i = index">
					<span
						class="status"
						[class.checked-in]="passenger.checkedIn"></span>

					{{ i }}: {{ passenger.fullName }}
					<div class="date">
						Check in date:
						{{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in'}}
					</div>
					<div class="children">
						Children: {{ passenger.children?.length || 0 }}
					</div>
				</li>
			</ul>
		</div>
	`
})

export class PassengerDashboardComponent implements OnInit {
	passengers: Passengers[];

	constructor() {}

	public ngOnInit(): void {
		console.log('ngOnInit');
		this.passengers = [{
			id: 1,
			fullName: 'Rob',
			checkedIn: true,
			checkInDate: 1490742000000,
			children: [{ name: 'Hannah', age: 12}]
		}]
	}
}
