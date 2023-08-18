"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { useCategorybyId } from "@app/dashboard/hooks/useCategory";

export default function App({ params }) {
  const { isLoading, isError, data, refetch } = useCategorybyId(params.id_cat);

  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Giro 1"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (isError) {
    return <div>No se pudo obtener los datos...</div>;
  }

  return (
    <div>
      {/* Hola? , {JSON.stringify(data)} */}
      <Image width={300} alt="Categoria" src={data.imagen} />
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className="capitalize">
            {selectedValue}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection actions"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          <DropdownItem key="Giro 1">Giro 1</DropdownItem>
          <DropdownItem key="Giro 2">Giro 2</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Input
        isClearable
        type="text"
        label="Categoria"
        variant="bordered"
        placeholder="Ingrese el nombre de la categoria"
        defaultValue={data.nombre}
        onClear={() => console.log("input cleared")}
        className="max-w-xs"
      />
      <Button color="primary">Actualizar</Button>
    </div>
  );
}
