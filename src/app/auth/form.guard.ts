import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from '../admin/confirm-dialog/confirm-dialog.component';
import { SaveData } from './save-data';

@Injectable({
  providedIn: 'root'
})
export class FormGuard implements CanDeactivate<SaveData> {
  constructor(private dialog:MatDialog){}

  canDeactivate(
    component: SaveData,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(!component.isSaved()){
        const dialogRef=this.dialog.open(ConfirmDialogComponent)
        return dialogRef.afterClosed();
      }
      return true;
  }
  
}
