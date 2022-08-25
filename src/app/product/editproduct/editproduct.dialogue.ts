import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

/**
 * @title Dialog elements
 */
@Component({
  selector: 'dialog-editproduct',
  templateUrl: 'editproduct.dialogue.html',
})
export class DialogedProductedit {
  constructor(public dialog: MatDialog) {}

  
}