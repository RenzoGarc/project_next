import React from "react";
const columns = [
  { name: "ID", uid: "id_cat", sortable: true },
  { name: "GIRO", uid: "pk_giro", sortable: true },
  { name: "NOMBRE", uid: "nombre", sortable: true },
  { name: "IMAGEN", uid: "imagen" },
  { name: "ESTADO", uid: "b_cat", sortable: true },
  { name: "ORDEN", uid: "n_orden" },
  { name: "ACCIONES", uid: "actions" },
];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];

const users = [
  {
    id_cat: 3,
    pk_giro: 1,
    nombre: "Literatura",
    imagen:
      "https://api.juegodepalabras.com.pe/public/Categorias/Materiales/3.png",
    b_cat: true,
    n_orden: 1,
  },
  {
    id_cat: 1,
    pk_giro: 1,
    nombre: "Comunicación",
    imagen:
      "https://api.juegodepalabras.com.pe/public/Categorias/Materiales/1.png",
    b_cat: true,
    n_orden: 2,
  },
  {
    id_cat: 2,
    pk_giro: 1,
    nombre: "Aptitud Verbal",
    imagen:
      "https://api.juegodepalabras.com.pe/public/Categorias/Materiales/2.png",
    b_cat: true,
    n_orden: 3,
  },
  {
    id_cat: 4,
    pk_giro: 1,
    nombre: "Estrategias y didáctica",
    imagen:
      "https://api.juegodepalabras.com.pe/public/Categorias/Materiales/4.png",
    b_cat: true,
    n_orden: 4,
  },
  {
    id_cat: 13,
    pk_giro: 2,
    nombre: "Resúmenes",
    imagen:
      "https://api.juegodepalabras.com.pe/public/Categorias/AudioLibros/7.png",
    b_cat: true,
    n_orden: 2,
  },
  {
    id_cat: 11,
    pk_giro: 2,
    nombre: "Mitos y Leyendas",
    imagen:
      "https://api.juegodepalabras.com.pe/public/Categorias/AudioLibros/5.png",
    b_cat: true,
    n_orden: 3,
  },
  {
    id_cat: 14,
    pk_giro: 2,
    nombre: "Game of Word",
    imagen:
      "https://api.juegodepalabras.com.pe/public/Categorias/AudioLibros/8.png",
    b_cat: true,
    n_orden: 1,
  },
  {
    id_cat: 12,
    pk_giro: 2,
    nombre: "Juego de Palabras",
    imagen:
      "https://api.juegodepalabras.com.pe/public/Categorias/AudioLibros/6.png",
    b_cat: true,
    n_orden: 4,
  },
  {
    id_cat: 31,
    pk_giro: 1,
    nombre: "qwe",
    imagen: "qwe",
    b_cat: true,
    n_orden: 0,
  },
];

export { columns, users, statusOptions };
