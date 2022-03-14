import { Component, OnInit} from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogConfirmingComponent } from '../dialog-confirming/dialog-confirming.component';
@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    constructor(private heroService: HeroService,
                private dialog: MatDialog) { }

    heroes: Hero[] = [];

    ngOnInit(): void {
        this.getHeroes()
    }

    getHeroes():void {
        this.heroService.getHeroes()
            .subscribe(heroes => {
                this.heroes = heroes;
                this.dataSource = heroes;
            })
    }

    dataSource: Hero[] = [];
    displayedColumns: string[] = ['id',
                                'name',
                                'race',
                                'type',
                                'level',
                                'power',
                                'edit',
                                'del'];

    openDialog(person: Hero) {
        this.operatedHero = person;

        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        const dialogRef = this.dialog.open(DialogConfirmingComponent, dialogConfig);

        dialogRef.afterClosed()
            .subscribe(data => {
                if(data === true) {
                    this.delete(this.operatedHero);
                }
            });
    }

    operatedHero!: Hero;

    delete(hero: Hero): void {
        this.heroes = this.heroes.filter(h => h !== hero);
        this.heroService.deleteHero(hero.id).subscribe();
        this.getHeroes()
    }

    add(name: string, race: string, type: string, lev: string, pow: string): void {

        name = name.trim();
        if (!name) { return; };
        if (!lev) {lev = '1'};
        if (!pow) {pow = '1'};

        let level = Number(lev);
        let power = Number(pow);
        this.heroService.addHero({ name, race, type, level, power } as Hero)
            .subscribe(hero => {
                this.heroes.push(hero);
            });
        this.getHeroes();
    }
}
