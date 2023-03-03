import { Component, Input } from '@angular/core';
import { IHero } from 'src/interfaces/IHero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero?: IHero;
}
