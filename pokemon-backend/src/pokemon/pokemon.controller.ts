import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDTO } from './dto/create-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
import { UpdatePokemonDTO } from './dto/update-pokemon.dto';

@Controller('/pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  create(@Body() data: CreatePokemonDTO): Promise<Pokemon> {
    return this.pokemonService.create(data);
  }

  @Get()
  findAll(): Promise<Pokemon[]> {
    return this.pokemonService.findAll();
  }

  @Get('/:id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Pokemon> {
    const foundPokemon = await this.pokemonService.findById(id);
    if (!foundPokemon) {
      throw new NotFoundException('Could not find pokemon with id' + id);
    }
    return foundPokemon;
  }

  @Patch('/:id')
  async updateById(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdatePokemonDTO,
  ): Promise<Pokemon> {
    if (Object.keys(data).length < 1) {
      throw new BadRequestException('Must update something');
    }

    const updatedPokemon = await this.pokemonService.updateById(id, data);
    if (!updatedPokemon) {
      throw new NotFoundException('Could not find pokemon with id' + id);
    }
    return updatedPokemon;
  }

  @Delete('/:id')
  @HttpCode(204)
  async deleteById(@Param('id', ParseIntPipe) id: number): Promise<void> {
    const isDeleted = await this.pokemonService.deleteById(id);

    if (!isDeleted) {
      throw new NotFoundException('Could not find pokemon with id ' + id);
    }
  }
}
