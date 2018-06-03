import {
	Component,
	Input
} from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
	selector: 'passenger-count',
	template: `
		<div>
			<h3>Airline Passengers</h3>
			<div>
				Total Passengers: {{ checkedInPassengers() || 0 }} / {{ items?.length }}
			</div>
		</div>
	`
})

export class PassengerCountComponent {
	@Input() items: Passenger[];
	checkedInPassengers(): number {
		if (!this.items) {
			return;
		}

		return this.items.filter((passenger: Passenger) => {
			return passenger.checkedIn;
		}).length;
	}
}
