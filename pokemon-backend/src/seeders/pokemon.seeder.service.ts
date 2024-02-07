import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/mysql';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';

@Injectable()
export class PokemonSeederService {
  constructor(private readonly em: EntityManager) {}

  async seed() {
    const pokemonToSeed: Pokemon[] = [
      { id: 1, name: 'Koffing', type: 'poison', level: 19, maxHp: 52 },
      // Add more Pokémon data here
    ];

    await this.em.persistAndFlush(pokemonToSeed);
  }
}
