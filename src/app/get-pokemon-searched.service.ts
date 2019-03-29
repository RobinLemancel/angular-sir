import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GetPokemonSearchedService {  
	private id = new BehaviorSubject('');
  currentId = this.id.asObservable();

    constructor() {
    }

    getPokeSearched(data) {
        this.id.next(data);
    }
}
