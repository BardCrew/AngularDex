import { Component, OnInit } from '@angular/core';
import { Dane } from 'src/assets/fakeson/fakeson';
import { PokeStats } from './pokestats';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  currentName: string = this.capitalize(Dane.name)
  sprite = Dane.sprites.front_default
   

  constructor() { }

  ngOnInit(): void {
  }

  capitalize(word: string) {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }

  onClick() {
    Dane.stats.forEach((x)=>{
      console.log(x.base_stat)
    })
  }

}
