import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { SnackBarsService } from './snack-bars.service';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    constructor(
        private http: HttpClient,
        private messageService: MessageService,
        private snackBarsService: SnackBarsService) { }

    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>('http://localhost:3000/heroes/', {
            headers: {
                'authorization': window.localStorage['auth_token']
            }
        })
            .pipe(
                tap(_ => this.log('fetched heroes')),
                catchError(this.handleError<Hero[]>('getHeroes', []))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            console.error(error);

            this.log(`${operation} failed: ${error.message}`);

            this.snackBarsService.openSnackBar('error');

            return of(result as T);
        };
    };

    getHero(id: number): Observable<Hero> {
        return this.http.get<Hero>(`http://localhost:3000/hero/${id}/`, {
            headers: {
                'authorization': window.localStorage['auth_token']
            }
        })
            .pipe(
                tap(_ => this.log(`fetched hero id=${id}`)),
                catchError(this.handleError<Hero>(`getHero id=${id}`))
            );
    };

    updateHero(hero: Hero): Observable<any> {
        return this.http.put('http://localhost:3000/hero/', hero, this.httpOptions)
        .pipe(tap(_ => {
                this.log(`updated hero id=${hero.id}`);
                this.snackBarsService.openSnackBar('updateHero');
            }),
            catchError(this.handleError<any>('updateHero'))
        );
    }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json',
                                   'authorization': window.localStorage['auth_token']
        })
    };


    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }

    addHero(hero: Hero): Observable<Hero> {
        return this.http.post<Hero>('http://localhost:3000/hero/', hero, this.httpOptions)
        .pipe(
            tap((newHero: Hero) => {
                this.log(`added hero id=${newHero.id}, name: ${newHero.name}`);
                this.snackBarsService.openSnackBar('createHero');
            }),
            catchError(this.handleError<Hero>('addHero'))
        );
    }

    deleteHero(id: number): Observable<Hero> {

        return this.http.delete<Hero>(`http://localhost:3000/hero/${id}`, this.httpOptions)
            .pipe(tap(_ => {
                this.log(`deleted hero id=${id}`);
                this.snackBarsService.openSnackBar('deleteHero');
            }),
            catchError(this.handleError<Hero>('deleteHero'))
        );
    };

    searchHeroes(term: string): Observable<Hero[]> {
        if (!term.trim()) {
            return of([]);
        }
        return this.http.get<Hero[]>(`${'/heroes'}/?name=${term}`).pipe(
            tap(x => x.length ?
               this.log(`found heroes matching "${term}"`) :
               this.log(`no heroes matching "${term}"`)),
            catchError(this.handleError<Hero[]>('searchHeroes', []))
        );
    }
}
