import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

/*   heroes: Hero[] = []; */

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    /* this.getHeroes() */
  }

/*   getHeroes():void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
        this.dataSource = heroes;
      })
  } */

  heroes: Hero[] = [
    { id: 11, name: 'Dr Nice', race: 'human', type: 'medic', level: 90, power: 60 },
    { id: 12, name: 'Narco', race: 'goblin', type: 'criminal', level: 99, power: 90 },
    { id: 13, name: 'Bombasto', race: 'elf', type: 'paladin', level: 70, power: 65 },
    { id: 14, name: 'Celeritas', race: 'elf', type: 'magician', level: 88, power: 45 },
    { id: 15, name: 'Magneta', race: 'elf', type: 'magician', level: 75, power: 40 },
    { id: 16, name: 'RubberMan', race: 'undead', type: 'priest', level: 50, power: 55 },
    { id: 17, name: 'Dynama', race: 'human', type: 'magician', level: 78, power: 65 },
    { id: 18, name: 'Dr IQ', race: 'human', type: 'scientist', level: 99, power: 15 },
    { id: 19, name: 'Magma', race: 'human', type: 'musician', level: 90, power: 25 },
    { id: 20, name: 'Tornado', race: 'undead', type: 'criminal', level: 5, power: 4 }
  ];

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

  @ViewChild('heroTable') table!: any;

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
    this.table.renderRows();
    console.log(this.heroes)
    console.log(this.table)
  }

  displayedColumns: string[] = ['id',
                              'name',
                              'race',
                              'type',
                              'level',
                              'power',
                              'del'];
  dataSource: Hero[] = this.heroes;

}
