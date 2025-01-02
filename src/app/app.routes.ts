import { Routes } from '@angular/router';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { UserProfileComponent } from './components/layout/user-profile/user-profile.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redirection par défaut
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: '**', redirectTo: 'dashboard' } // Redirection pour les chemins inconnus
];
