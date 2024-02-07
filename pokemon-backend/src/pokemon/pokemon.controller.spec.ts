import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './entities/pokemon.entity';

describe('PokemonController', () => {
  let controller: PokemonController;
  let serviceMock: Partial<PokemonService> & {
    findAll: jest.Mock;
    findById: jest.Mock;
  };

  beforeEach(async () => {
    serviceMock = {
      findAll: jest.fn(),
      findById: jest.fn(),
    } as Partial<PokemonService> & { findAll: jest.Mock; findById: jest.Mock };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [{ provide: PokemonService, useValue: serviceMock }],
    }).compile();

    controller = module.get<PokemonController>(PokemonController);
  });

  it('should return all Pokemons', async () => {
    const pokemons: Pokemon[] = [
      { id: 1, name: 'Pikachu', type: 'Electric', level: 25, maxHp: 100 },
    ];

    serviceMock.findAll.mockResolvedValue(pokemons);

    expect(await controller.findAll()).toEqual(pokemons);
  });

  it('should return a specific Pokemon by ID', async () => {
    const pokemon: Pokemon = {
      id: 1,
      name: 'Pikachu',
      type: 'Electric',
      level: 25,
      maxHp: 100,
    };
    const id = 1;

    serviceMock.findById.mockResolvedValue(pokemon);

    expect(await controller.findById(id)).toBe(pokemon);
  });
});
