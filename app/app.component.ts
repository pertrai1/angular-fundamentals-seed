import { Component } from '@angular/core';

interface Nav {
	name: string,
	link: string,
	exact: boolean
}

@Component({
	selector: 'app-root',
	styleUrls: ['app.component.scss'],
	template: `
		<div class="app">
			<a
				*ngFor="let item of nav"
				[routerLink]="item.link"
				routerLinkActive="active"
				[routerLinkActiveOptions]="{ exact: item.exact }">
					{{ item.name }}
			</a>
			<router-outlet></router-outlet>
		</div>
	`
})

export class AppComponent {
	nav: Nav[] = [
		{
			link: '/',
			name: 'Home',
			exact: true
		},
		{
			link: '/passengers',
			name: 'Passengers',
			exact: true
		},
		{
			link: '/oops',
			name: '404',
			exact: false
		}
	]
}
