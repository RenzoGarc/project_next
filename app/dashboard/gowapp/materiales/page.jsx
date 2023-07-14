"use client";

import TableGow from "@components/dashboard/gowapp/TableGow";
import { useEffect, useState } from "react";

const MaterialPage = () => {
  const [respuesta, setRespuesta] = useState([]);
  useEffect(() => {
    const consultarAPI = async () => {
      const url = "https://fakestoreapi.com/products?sort=desc";
      const response = await fetch(url);
      const data = await response.json();
      setRespuesta(data);
    };
    consultarAPI();
  }, []);
  return (
    <>
      <TableGow respuesta={respuesta}></TableGow>
    </>
  );
};

export default MaterialPage;
