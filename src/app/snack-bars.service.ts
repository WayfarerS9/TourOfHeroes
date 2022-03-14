import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarCreateHeroComponent } from './snack-bar-create-hero/snack-bar-create-hero.component';
import { SnackBarDeleteHeroComponent } from './snack-bar-delete-hero/snack-bar-delete-hero.component';
import { SnackBarErrorComponent } from './snack-bar-error/snack-bar-error.component';
import { SnackBarUpdateHeroComponent } from './snack-bar-update-hero/snack-bar-update-hero.component';

@Injectable({
    providedIn: 'root'
})
export class SnackBarsService {

    constructor(private _snackBar: MatSnackBar) { }

    durationInSeconds = 3;
    openSnackBar(componentName: string) {

        if(componentName === 'deleteHero') {
            this._snackBar.openFromComponent(
                SnackBarDeleteHeroComponent,
                {duration: this.durationInSeconds * 1000}
            );
        }

        if(componentName === 'createHero') {
            this._snackBar.openFromComponent(
                SnackBarCreateHeroComponent,
                {duration: this.durationInSeconds * 1000}
            );
        }

        if(componentName === 'error') {
            this._snackBar.openFromComponent(
                SnackBarErrorComponent,
                {duration: this.durationInSeconds * 1000}
            );
        }

        if(componentName === 'updateHero') {
            this._snackBar.openFromComponent(
                SnackBarUpdateHeroComponent,
                {duration: this.durationInSeconds * 1000}
            );
        }
    }
}
