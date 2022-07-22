import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionsComponent } from './pages/regions/regions.component';
import { DepartementsComponent } from './pages/departements/departements.component';
const routes: Routes = [
  { path: '', component: RegionsComponent },
  { path: 'dep', component: DepartementsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
