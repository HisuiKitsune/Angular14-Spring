import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../model/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  @Input() clients: Client[] = [];
  @Output() edit = new EventEmitter(false);
  @Output() add = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['id','cpf','name','email','phone','actions'];

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(client: Client) {
    this.edit.emit(client);

  }

  onDelete(client: Client) {
    this.remove.emit(client);
  }

}
