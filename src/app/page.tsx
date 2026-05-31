'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { IPokemon } from '@/types/pokemon';
import Sidebar from '@/layout/Sidebar';
import Footer from '@/layout/Footer';
import Description from '@/features/about/Description';
import ExperienceSection from '@/features/experience/ExperienceSection';
import ProjectsSection from '@/features/projects/ProjectsSection';
import Pokedex from '@/features/pokedex/Pokedex';
import CursorSpotlight from '@/components/CursorSpotlight';

export default function Home() {
  const [activeLink, setActiveLink] = useState('about');
  const [openPokedex, setOpenPokedex] = useState(false);
  const [pokemon, setPokemon] = useState<IPokemon[]>();

  useEffect(() => {
    const controller = new AbortController();
    const fetchPokemon = async () => {
      try {
        const responses = await Promise.all(
          Array.from({ length: 151 }, (_, i) =>
            axios.get(`https://pokeapi.co/api/v2/pokemon/${i + 1}/`, { signal: controller.signal })
          )
        );
        setPokemon(
          responses.map(({ data }) => ({
            id: data.id,
            abilities: data.abilities,
            name: data.name,
            types: data.types,
            sprites: data.sprites,
            stats: data.stats,
          }))
        );
      } catch (err) {
        if (!axios.isCancel(err)) console.error('Failed to fetch Pokémon:', err);
      }
    };
    fetchPokemon();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll<HTMLElement>('section').forEach((section) => {
        const top = section.offsetTop - 100;
        if (window.scrollY >= top && window.scrollY < top + section.offsetHeight) {
          setActiveLink(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="lg:min-h-screen lg:grid lg:grid-cols-[45%_55%] bg-gradient-to-br from-indigo-950 to-slate-950 py-5 lg:p-0">
      <CursorSpotlight />
      <Sidebar activeLink={activeLink} onNameClick={() => setOpenPokedex(true)} />
      <main className="lg:pb-20 lg:pr-20">
        <section className="lg:pt-20 lg:mx-5" id="about">
          <nav className="section-nav">
            <h4 className="text-center text-slate-300 font-bold mb-8 py-2 sm:mx-10">ABOUT</h4>
          </nav>
          <Description />
        </section>
        <ExperienceSection />
        <ProjectsSection />
        <Footer />
      </main>
      <Pokedex open={openPokedex} onClose={() => setOpenPokedex(false)} pokemonData={pokemon} />
    </div>
  );
}
