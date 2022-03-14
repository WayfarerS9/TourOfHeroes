import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    hero: Hero = {
        id: 0,
        name: '',
        race: '',
        type: '',
        level: 1,
        power: 1
    };

    constructor(
        private route: ActivatedRoute,
        private heroService: HeroService,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.getHero();
    }

    getHero(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        if(id) {
            this.heroService.getHero(id)
                .subscribe(hero => this.hero = hero);
        }
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {

        if (this.hero.name.trim().length > 0 &&
            this.hero.level > 0 &&
            this.hero.level <= 100 &&
            this.hero.power > 0 &&
            this.hero.power <= 100) {

            this.heroService.updateHero(this.hero)
                .subscribe(() => this.goBack());
        }
    }

    reset():void {
        this.hero = {
            id: 0,
            name: '',
            race: '',
            type: '',
            level: 1,
            power: 1
        };
    }

    add(name: string, race: string, type: string, lev: string, pow: string): void {

        name = name.trim();
        let level = Number(lev);
        let power = Number(pow);

        if (name.length > 0 &&
            level > 0 &&
            level <= 100 &&
            power > 0 &&
            power <= 100 &&
            race &&
            type) {

                this.heroService.addHero({ name, race, type, level, power } as Hero)
                    .subscribe(() => this.goBack());
            }
    }
}
