import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from '../github/hero/mock-heroes';
import {HeroService} from './hero.service';

@Component({
  selector: 'hero',
  styleUrls: ['./hero.component.css'],
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit{
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => {this.heroes = heroes;});
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}