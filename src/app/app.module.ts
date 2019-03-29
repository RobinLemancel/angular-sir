import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';

import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { PokeapiService } from './pokeapi.service';
import { GetPokemonSearchedService } from './get-pokemon-searched.service';
import { PokeInfoComponent } from './poke-info/poke-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FilterPokemonPipePipe,
    PokeInfoComponent
  ],
  imports: [
	FormsModule,
    BrowserModule,
	HttpClientModule
  ],
  providers: [PokeapiService,GetPokemonSearchedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
