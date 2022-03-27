import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogConfirmingComponent } from './dialog-confirming/dialog-confirming.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarCreateHeroComponent } from './snack-bar-create-hero/snack-bar-create-hero.component';
import { SnackBarUpdateHeroComponent } from './snack-bar-update-hero/snack-bar-update-hero.component';
import { SnackBarDeleteHeroComponent } from './snack-bar-delete-hero/snack-bar-delete-hero.component';
import { SnackBarErrorComponent } from './snack-bar-error/snack-bar-error.component';

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent,
        HeroSearchComponent,
        DialogConfirmingComponent,
        /* SnackBarsComponent, */
        SnackBarCreateHeroComponent,
        SnackBarUpdateHeroComponent,
        SnackBarDeleteHeroComponent,
        SnackBarErrorComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
/*         HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
            ), */
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatListModule,
        MatTableModule,
        MatDialogModule,
        MatSnackBarModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
