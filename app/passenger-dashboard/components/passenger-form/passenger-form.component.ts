import {
	Component,
	Input
} from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

@Component({
	selector: 'passenger-form',
	styleUrls: ['passenger-form.component.scss'],
	template: `
		<form #form="ngForm" novalidate>
			{{ detail | json }}
			<div>
			Passenger Name:
			<input
				type="text"
				required
				name="fullName"
				#fullName="ngModel"
				[ngModel]="detail?.fullName">
			<div *ngIf="fullName.errors?.required &amp;&amp; fullName.dirty">
				Passenger name is required
			</div>
			Passenger ID:
			<input
				type="number"
				name="id"
				[ngModel]="detail?.id">
			Passenger Checked In?
			<label>
				<input
					type="radio"
					[value]="true"
					name="checkedIn"
					[ngModel]="detail?.checkedIn"
					(ngModelChange)="toggleCheckIn($event)">
				Yes
			</label>
			<label>
				<input
					type="radio"
					[value]="false"
					name="checkedIn"
					[ngModel]="detail?.checkedIn"
					(ngModelChange)="toggleCheckIn($event)">
				No
			</label>
			</div>

			<div *ngIf="form.value.checkedIn">
				Check In Date:
				<input
					type="number"
					name="checkInDate"
					[value]="checkInDate"
					[ngModel]="detail?.checkInDate">
			</div>

			<div>
				Baggage:
				<select
					name="baggage"
					[ngModel]="detail?.baggage">
					<option
						*ngFor="let item of baggage"
						[value]="item.key"
						[selected]="item.key === detail?.baggage">
						{{ item.value }}
					</option>
				</select>
			</div>

			<div>Values: {{ form.value | json}}</div>
			<div>Valid: {{ form.valid | json }}</div>
			<div>Invalid: {{ form.invalid | json }}</div>
		</form>
	`
})

export class PassengerFormComponent {
	@Input() public detail: Passenger;

	baggage: Baggage[] = [{
		key: 'none',
		value: 'No Baggage'
	},{
		key: 'hand-only',
		value: 'Hand baggage'
	}];

	private toggleCheckIn(checkedIn: boolean) {
		if (checkedIn) {
			this.detail.checkInDate = Date.now();
		}
	}
}
