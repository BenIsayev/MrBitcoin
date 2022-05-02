import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StatsPageComponent } from './pages/stats-page/stats-page.component';
import { ContactResolverService } from './services/contact-resolver.service';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    canActivate: [IsLoggedInGuard],
    children: [
      {
        path: 'edit/:id',
        component: ContactEditPageComponent,
        resolve: { contact: ContactResolverService }
      },
      {
        path: 'edit',
        component: ContactEditPageComponent,
        resolve: { contact: ContactResolverService }
      }
    ]
  },
  {
    path: 'contact/:id',
    component: ContactDetailsPageComponent,
    resolve: { contact: ContactResolverService },
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'stats',
    component: StatsPageComponent,
    canActivate: [IsLoggedInGuard]
  },

  {
    path: '',
    component: HomePageComponent,
    canActivate: [IsLoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
