import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(private messageService: MessageService) { }
  h = HEROES[10];
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
   // this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  getname(id:number){
  //  return HEROES[id].name;
  }

  getHero(id: number): Observable<Hero> {
   
  

    return of(HEROES.find(hero => hero.id === id));
  }
  hero: Hero;
  sendmessage(id:number){
    this.getHero(id).subscribe(hero => {this.hero = hero; 
      this.messageService.add(`fetched hero id=${id}`+ "  "+
      "Name = " + hero.name);});


  }
}