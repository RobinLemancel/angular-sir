import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from './pokemon';

@Pipe({
  name: 'filterPokemonPipe'
})
export class FilterPokemonPipePipe implements PipeTransform {

	transform(value : Pokemon[], filtre: string): Pokemon[] {
		if(filtre === "") {
			return value;
		}
		else {
			var pokemonsFiltres : Pokemon[] = [];
			if (typeof value !== 'undefined') {
				value.forEach(function(entry : Pokemon) {
						console.log('filtre');
					if (entry.nom.indexOf(filtre) !== -1) {
						pokemonsFiltres.push(entry);
					}
				});
			}
			return pokemonsFiltres;
		}
	}
}
