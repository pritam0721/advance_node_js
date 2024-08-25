#!/usr/bin/env node
// const yargs = require('yargs');
// const { argv } = yargs(process.argv);

const inquirer = require('inquirer');

const printFiveMoves = async (pokemonName) => {
  const resposne = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const pokemon = await resposne.json();
  const moves = pokemon.moves.map(({ move }) => {
    return move;
  });
  console.log(moves.slice(0, 5));
};
const prompt = inquirer.createPromptModule();
prompt([
  { type: 'input', name: 'pokemon', message: 'Chose Your pokemon to battle' },
]).then((answers) => printFiveMoves(answers.pokemon));
