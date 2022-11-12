import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Client } from './../model/client';
import { ClientsService } from './../services/clients.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients$: Observable<Client[]>;
  displayedColumns = ['id','cpf','name','email','phone','actions'];

  //clientsService: ClientsService;

  constructor(
    public dialog: MatDialog,
    private clientsService: ClientsService,
    private router: Router,
    private route: ActivatedRoute
    ) {

    this.clients$ = this.clientsService.list()
    .pipe(catchError(error => {this.onError('Error on Listing Client Data');
    return of ([])}));
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent,
    {
      data: errorMsg,
    });
  }

  ngOnInit(): void { }


  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}



