import { Routes } from '@angular/router';
import { HomeCardComponent } from './components/home-card/home-card.component';
import { HomeListComponent } from './home-list/home-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'homes',
    pathMatch: 'full',
  },
  {
    path: 'homes',
    component: HomeListComponent,
  }
];
