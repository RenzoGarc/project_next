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

export { columns, statusOptions };
