import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTattooComponent } from './components/list-tattoo/list-tattoo.component';
import { NewTattooComponent } from './components/new-tattoo/new-tattoo.component';

const routes: Routes = [
  { path: '', component: ListTattooComponent},
  { path: 'new-tattoo', component: NewTattooComponent },
  { path: 'edit/:id', component: NewTattooComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
