'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaTimes, FaSearch } from 'react-icons/fa';
import { IPokemon } from '@/types/pokemon';
import { primary, secondary } from '@/utils/typeColors';
import styles from './pokedex.module.scss';

interface PokedexProps {
  open: boolean;
  onClose: () => void;
  pokemonData: IPokemon[] | undefined;
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatId(id: number) {
  return `#${String(id).padStart(3, '0')}`;
}

export default function Pokedex({ open, onClose, pokemonData }: PokedexProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const stateClass = open ? styles.open : styles.closed;

  const filteredPokemon = pokemonData?.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pokemon.id.toString().includes(searchTerm)
  );

  return (
    <div onClick={onClose} className={`${styles.overlay} ${stateClass}`}>
      <div onClick={(e) => e.stopPropagation()} className={`${styles.panel} ${stateClass}`}>
        <div className={styles.stickyHeader}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-slate-100">Pokedex</h2>
            <button onClick={onClose} className={styles.closeBtn}>
              <FaTimes />
            </button>
          </div>

          <div className={styles.searchWrapper}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search Pokemon name or ID..."
              className={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.grid}>
          {filteredPokemon ? (
            filteredPokemon.map((pokemon) => {
              const typeName = pokemon.types[0].type.name;
              const artwork =
                pokemon.sprites.other?.['official-artwork']?.front_default ??
                pokemon.sprites.front_default ??
                '';
              return (
                <div
                  key={pokemon.id}
                  className={styles.pokemonCard}
                  style={{ backgroundColor: secondary[typeName as keyof typeof secondary] }}
                >
                  <div className={styles.cardHeader}>
                    <p className={styles.pokemonName}>{capitalize(pokemon.name)}</p>
                    <p className={styles.pokemonId}>{formatId(pokemon.id)}</p>
                  </div>

                  <div className={styles.cardContent}>
                    <div className={styles.typeList}>
                      {pokemon.types.map(({ type }) => (
                        <span
                          key={type.name}
                          className={styles.typeBadge}
                          style={{ backgroundColor: primary[type.name as keyof typeof primary] }}
                        >
                          {capitalize(type.name)}
                        </span>
                      ))}
                    </div>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={artwork}
                        alt={pokemon.name}
                        className={styles.avatar}
                        loading="lazy"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                </div>
              );
            })
          ) : pokemonData ? (
            <div className="col-span-full text-center py-10 text-slate-400">
              No Pokemon found matching your search.
            </div>
          ) : (
            <div className={styles.loader} role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-teal-500"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
