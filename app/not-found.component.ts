import { Component } from '@angular/core';

@Component({
	selector: 'not-found',
	template: `
		<div>
			Not Found, go <a routerLink="/">home</a>
		</div>
	`
})

export class NotFoundComponent {}
