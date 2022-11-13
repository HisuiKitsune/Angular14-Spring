import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Client } from './../model/client';
import { ClientsService } from './../services/clients.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients$: Observable<Client[]> | null = null;

  @Output() edit = new EventEmitter(false);

  //clientsService: ClientsService;

  constructor(
    public dialog: MatDialog,
    private clientsService: ClientsService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
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

  refresh() {
    this.clients$ = this.clientsService.list()
    .pipe(
      catchError(error => {
        this.onError('Error on listing clients');
        return of([])
      })
    );
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(client: Client) {
    this.router.navigate(['edit', client._id], {relativeTo: this.route});

  }
  onRemove(client: Client) {
    this.clientsService.remove(client._id).subscribe(
      () =>
      {
        this.refresh();
        this.snackBar.open('Removed client', 'X',
      {
        duration: 5000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });},

        () => this.onError('Error on removing client'));

      }
}



