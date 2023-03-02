import { Component } from '@angular/core';
import { IHero } from 'src/interfaces/IHero';
import { Heroes } from 'src/data/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: IHero[] = Heroes;
  selectedHero?: IHero;
  
  onSelect(hero: IHero): void {
    this.selectedHero = hero;
  }
}
