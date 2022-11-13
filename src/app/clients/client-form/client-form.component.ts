import { Client } from './../model/client';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { ClientsService } from './../services/clients.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  form = this.formBuilder.group( {
    _id:[''],
    name: [''],
    cpf: [''],
    email: [''],
    phone: [''],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: ClientsService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
    ) {

  }

  ngOnInit(): void {
    const client: Client = this.route.snapshot.data['client'];
    this.form.setValue({
    _id: client._id,
    name: client.name,
    cpf: client.cpf,
    email: client.email,
    phone: client.phone})
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

    getErrorMessage(fieldName: string) {
      const field = this.form.get(fieldName);

      if (field?.hasError('required')) {
        return 'Required Field';
      }

      if (field?.hasError('minlength')) {
        const requiredLength: number = field.errors ? field.errors['minlength']['requiredLength'] : 5;
        return `Minimum length must be of ${requiredLength} characters.`;
      }

      if (field?.hasError('maxlength')) {
        const requiredLength: number = field.errors ? field.errors['maxlength']['requiredLength'] : 200;
        return `Exceeded max length of ${requiredLength} characters.`;
      }

      return 'Invalid Field';
    }

  }

