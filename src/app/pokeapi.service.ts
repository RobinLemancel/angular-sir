import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokeapiService {

  constructor(private http : HttpClient) { 
  }
  
  getPokemons(){
	return this.http.get('https://pokeapi.co/api/v2/pokedex/1');
  }
  
  getPokemonInfo(id : string){
	return this.http.get('https://pokeapi.co/api/v2/pokemon/' + id);
  }
  
  
}
