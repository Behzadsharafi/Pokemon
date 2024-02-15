import normalImage from "../assets/normal.png";
import fireImage from "../assets/fire.png";
import waterImage from "../assets/water.png";
import grassImage from "../assets/grass.png";
import electricImage from "../assets/electric.png";
import iceImage from "../assets/ice.png";
import fightingImage from "../assets/fighting.png";
import poisonImage from "../assets/poison.png";
import groundImage from "../assets/ground.png";
import flyingImage from "../assets/flying.png";
import psychicImage from "../assets/psychic.png";
import bugImage from "../assets/bug.png";
import rockImage from "../assets/rock.png";
import ghostImage from "../assets/ghost.png";
import darkImage from "../assets/dark.png";
import dragonImage from "../assets/dragon.png";
import steelImage from "../assets/steel.png";
import fairyImage from "../assets/fairy.png";

interface BasePokemon {
	name: string;
	level: number;
	maxHp: number;
	type: string;
}

export interface Pokemon extends BasePokemon {
	id: number;
}

export interface CreatePokemonDTO extends BasePokemon {}

export interface UpdatePokemonDTO extends Partial<BasePokemon> {}

export const pokemonTypes = [
	{ type: "bug", image: bugImage },
	{ type: "dark", image: darkImage },
	{ type: "dragon", image: dragonImage },
	{ type: "electric", image: electricImage },
	{ type: "fairy", image: fairyImage },
	{ type: "fighting", image: fightingImage },
	{ type: "fire", image: fireImage },
	{ type: "flying", image: flyingImage },
	{ type: "ghost", image: ghostImage },
	{ type: "grass", image: grassImage },
	{ type: "ground", image: groundImage },
	{ type: "ice", image: iceImage },
	{ type: "normal", image: normalImage },
	{ type: "poison", image: poisonImage },
	{ type: "psychic", image: psychicImage },
	{ type: "rock", image: rockImage },
	{ type: "steel", image: steelImage },
	{ type: "water", image: waterImage },
];
