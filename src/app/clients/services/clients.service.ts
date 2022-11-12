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

  save(client: Client) {
    return this.httpClient.post<Client>(this.API, client);
  }
}
