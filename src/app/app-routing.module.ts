import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { FindUsComponent } from './find-us/find-us.component';
import { MenuComponent } from './menu/menu.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
	{ path: '', redirectTo: '/start', pathMatch: 'full' },
	{ path: 'start', component: StartComponent },
	{ path: 'find_us', component: FindUsComponent },
	{ path: 'menu', component: MenuComponent },
	{ path: 'booking', component: BookingComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'gallery', component: GalleryComponent },
	{ path: "**", component: StartComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})],
	exports: [RouterModule]

})
export class AppRoutingModule { }
export const routingComponents = [
								StartComponent,
								FindUsComponent,
								MenuComponent,
								BookingComponent,
								ContactComponent,
								GalleryComponent
								];