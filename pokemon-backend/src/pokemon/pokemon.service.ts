import { ConflictException, Injectable } from '@nestjs/common';
import { CreatePokemonDTO } from './dto/create-pokemon.dto';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Pokemon } from './entities/pokemon.entity';
import { EntityRepository } from '@mikro-orm/mysql';
import { plainToInstance } from 'class-transformer';
import { UpdatePokemonDTO } from './dto/update-pokemon.dto';
import { wrap } from '@mikro-orm/core';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: EntityRepository<Pokemon>,
  ) {}
  async create(data: CreatePokemonDTO): Promise<Pokemon> {
    const existingPokemon = await this.pokemonRepository.findOne({
      name: data.name,
    });

    if (existingPokemon) {
      throw new ConflictException('a Pokemon with this name already exists');
    }
    const newPokemon = plainToInstance(Pokemon, data);
    this.pokemonRepository.create(newPokemon);
    await this.pokemonRepository.getEntityManager().persistAndFlush(newPokemon);
    return newPokemon;
  }

  async findAll(): Promise<Pokemon[]> {
    return this.pokemonRepository.findAll();
  }

  async findById(id: number): Promise<Pokemon | null> {
    const foundPokemon = await this.pokemonRepository.findOne({ id });
    return foundPokemon;
  }

  async updateById(
    id: number,
    data: UpdatePokemonDTO,
  ): Promise<Pokemon | null> {
    const foundPokemon = await this.findById(id);
    if (!foundPokemon) {
      return null;
    }
    wrap(foundPokemon).assign(data);
    await this.pokemonRepository.getEntityManager().flush();
    return foundPokemon;
  }

  async deleteById(id: number): Promise<boolean> {
    const number = await this.pokemonRepository.nativeDelete({ id });
    return !!number;
  }
}
