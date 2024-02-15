import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

enum PokemonType {
  NORMAL = 'normal',
  FIRE = 'fire',
  WATER = 'water',
  GRASS = 'grass',
  ELECTRIC = 'electric',
  ICE = 'ice',
  FIGHTING = 'fighting',
  POISON = 'poison',
  GROUND = 'ground',
  FLYING = 'flying',
  PSYCHIC = 'psychic',
  BUG = 'bug',
  ROCK = 'rock',
  GHOST = 'ghost',
  DARK = 'dark',
  DRAGON = 'dragon',
  STEEL = 'steel',
  FAIRY = 'fairy',
}

export class CreatePokemonDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;

  @IsEnum(PokemonType)
  type: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  level: number;

  @IsInt()
  @Min(5)
  maxHp: number;
}
