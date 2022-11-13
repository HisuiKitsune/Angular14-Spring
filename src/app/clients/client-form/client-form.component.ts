import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

import { ClientsService } from './../services/clients.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  form = this.formBuilder.group( {
    name: [''],
    cpf: [''],
    email: [''],
    phone: [],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: ClientsService,
    private _snackBar: MatSnackBar,
    private location: Location
    ) {

  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.save(this.form.value)
      .subscribe(result => this.onSucess(), error => this.onError());
  }

  onCancel(){
    this.location.back();

  }

  onError(){
    this._snackBar.open('Error on register', 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5000
    })}

    onSucess(){
      this._snackBar.open('Sucess on register', 'X', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 5000
      });
      this.onCancel();
    }


  }

