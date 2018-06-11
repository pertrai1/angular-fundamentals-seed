import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output
} from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
	selector: 'passenger-detail',
	styleUrls: ['passenger-detail.component.scss'],
	template: `
		<div>
			<span
				class="status"
				[class.checked-in]="detail.checkedIn"></span>
				<div *ngIf="editing">
					<input
						type="text"
						[value]="detail.fullName"
						(input)="onNameChange(name.value)"
						#name>
				</div>
				<div *ngIf="!editing">
					{{ detail.fullName }}
				</div>
			<div class="date">
				Check in date:
				{{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in'}}
			</div>
			<button (click)="toggleEdit()">
				{{ editing ? 'Done' : 'Edit' }}
			</button>
			<button (click)="onRemove()">
				Remove
			</button>
			<button (click)="goToPassenger()">
				View
			</button>
		</div>
	`
})

export class PassengerDetailComponent implements OnChanges, OnInit {
	@Input() detail: Passenger;

	@Output() remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();
	@Output() edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();
	@Output() view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

	editing: boolean = false;

	constructor() {}

	ngOnInit() {
		console.log('OnInit');
	}
	ngOnChanges(changes) {
		if (changes.detail) {
			this.detail = Object.assign({}, changes.detail.currentValue);
		}
		console.log('OnChanges');
	}

	onNameChange(value: string) {
		this.detail.fullName = value;
	}

	toggleEdit() {
		if (this.editing) {
			this.edit.emit(this.detail);
		}
		this.editing = !this.editing;
	}

	onRemove() {
		this.remove.emit(this.detail);
	}

	onEdit() {
		this.edit.emit(this.detail);
	}

	goToPassenger() {
		this.view.emit(this.detail);
	}
}
