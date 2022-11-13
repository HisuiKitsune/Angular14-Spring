import { ClientFormComponent } from './client-form/client-form.component';
import { ClientsComponent } from './clients/clients.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', component: ClientsComponent },
  {path: 'new', component: ClientFormComponent },
  {path: 'edit/:id', component: ClientFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
