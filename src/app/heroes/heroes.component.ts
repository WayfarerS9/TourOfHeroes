import { Component, OnInit, ViewChild} from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

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
    }

    delete(hero: Hero): void {
        this.heroes = this.heroes.filter(h => h !== hero);
        this.dataSource = this.heroes;
    }

    displayedColumns: string[] = ['id',
                                'name',
                                'race',
                                'type',
                                'level',
                                'power',
                                'edit',
                                'del'];

    dataSource: Hero[] = [];
}
