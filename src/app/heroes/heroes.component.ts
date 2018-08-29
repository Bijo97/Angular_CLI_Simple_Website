import {
  Component,
  OnInit
} from '@angular/core';
import {
  pahlawan
} from '../hero';
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
  constructor() {}

  ngOnInit() {}

}
