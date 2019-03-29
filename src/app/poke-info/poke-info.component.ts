import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeapiService } from '../pokeapi.service';
import { GetPokemonSearchedService } from '../get-pokemon-searched.service';

@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.css']
})
export class PokeInfoComponent implements OnInit {

	id: string = '1';
	nom: string = '';
	img:string = '';
	
	capacites: Object[] = [];
	taille: number = 0;
	poids: number = 0;
  constructor(private pokeapiService : PokeapiService, private pokeSearchedService : GetPokemonSearchedService) { }


  ngOnInit() {
		this.pokeSearchedService.currentId.subscribe(id => {this.id = id; this.showPokemonInfo();})
	  this.showPokemonInfo();
  }

  showPokemonInfo(){
	  
	  this.pokeapiService.getPokemonInfo(this.id)
		.subscribe((data) =>{
			if(data['name'] !== undefined){
				this.capacites = [];
				this.nom = data['name'];
				this.taille = data['height'];
				this.poids = data['weight'];
				this.img = data['sprites']['front_default'];
				data['abilities'].forEach(function(capacite){
					this.capacites.push(capacite['ability'].name);
				}.bind(this));
			}	
			}, (error) => {
				console.log(error);
				this.id = 0;
			}
		);
	}
}
