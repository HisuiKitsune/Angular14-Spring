
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Client } from './../model/client';
import { ClientsService } from './../services/clients.service';

@Injectable({
  providedIn: 'root'
})
export class ClientResolver implements Resolve<Client> {

  constructor(private clientsService: ClientsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Client> {
    if (route.params && route.params['id']) {
      return this.clientsService.loadById(route.params['id']);
    }
    return of({_id: '', name: '', cpf: '', email: '', phone: ''});
  }
}
