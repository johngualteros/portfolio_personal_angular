import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import { CertificationDetailComponent } from './components/certification-detail/certification-detail.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SiteComponent } from './pages/site/site.component';

const routes: Routes = [
  { path: '', redirectTo: 'website', pathMatch: 'full' },
  { path: 'website', component: SiteComponent},
  { path: '404', component: PageNotFoundComponent},
  { path: 'certification/:id', component: CertificationDetailComponent},
  { path: 'project/:id', component: ProjectDetailsComponent},
  { path: 'notfound', redirectTo: '404', pathMatch: 'full'},
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), TranslateModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
