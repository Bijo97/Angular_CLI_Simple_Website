import {
  Component,
  OnInit
} from '@angular/core';
import {
  pahlawan
} from '../hero';
import {HEROES} from '../fake-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: pahlawan = {
    id: 1,
    name: "biljo",
    gender: "genderless"
  };
  heroes=HEROES;
  
  selectedHero:pahlawan;

  onSelect(hero:pahlawan):void{
    this.selectedHero=hero;
  }
  
  constructor() {}

  ngOnInit() {}

}
