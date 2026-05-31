export interface PokemonType {
  slot: number;
  type: { name: string; url: string };
}

export interface PokemonAbility {
  ability: { name: string; url: string };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string };
}

export interface PokemonSprites {
  front_default: string | null;
  other?: {
    'official-artwork'?: { front_default: string | null };
  };
}

export interface IPokemon {
  id: number;
  name: string;
  abilities: PokemonAbility[];
  types: PokemonType[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
}
