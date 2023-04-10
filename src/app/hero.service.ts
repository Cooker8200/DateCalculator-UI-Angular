import { Injectable } from '@angular/core';
import { Heroes } from 'src/data/mock-heroes';
import { IHero } from 'src/interfaces/IHero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {

  }

  getHeroes(): Observable<IHero[]> {
    const heroes = of(Heroes);
    this.messageService.add('Heroes Service: Fetched Heroes');
    return heroes;
  }
}
