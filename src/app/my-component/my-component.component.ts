import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon.ts';


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

	id:string = '';
	pokemons : Pokemon[];
	selectedPokemon :string =  null;
	constructor() {  }

  ngOnInit() {
	 /* this.pokemons = [
		{ "1":new Pokemon("1","Ouisticram")},
		{"2":new Pokemon("2","Chimpenfeu")},
		{"3":new Pokemon("3","Simiabraz")},
		{"4":new Pokemon("4","Pikachu")}
	];*/
	this.pokemons = [
	{id : "1", nom :"Ousticram"},
	{id : "2", nom :"Chimpenfeu"},
	{id : "3", nom :"Simiabraz"},
	{id : "4", nom :"Pikachu"}
	];
  }

}
