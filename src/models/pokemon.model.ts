import mongoose from "mongoose";

const PokemonSchema = new mongoose.Schema({
  nombre: String,
  genero: String,
  tipo: String,
  altura: Number,
  peso: Number,
  imagen: String
});

export const Pokemon = mongoose.model("Pokemon", PokemonSchema);