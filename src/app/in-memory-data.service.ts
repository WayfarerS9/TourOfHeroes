import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
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
        return {heroes};
    }

    genId(heroes: Hero[]): number {
        return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
    }
}
