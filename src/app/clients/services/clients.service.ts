import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/internal/operators/delay';

import { Client } from './../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private readonly API = 'api/clients';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Client[]>(this.API).pipe(delay(1000));
  }

  save(client: Partial<Client>) {
    if (client._id) {
      return this.update(client);
    }
      return this.create(client);
  }

  private create(client: Partial<Client>) {
    return this.httpClient.post<Client>(this.API, client);
  }

  loadById(id: string) {
    return this.httpClient.get<Client>(`${this.API}/${id}`);
  }

  private update(client: Partial<Client>) {
    return this.httpClient.put<Client>(`${this.API}/${client._id}`, client);
  }
  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }

}
