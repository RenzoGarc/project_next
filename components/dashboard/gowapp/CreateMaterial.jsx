"use client";

import {
  Button,
  Input,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Select,
  Option,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Spinner } from "@material-tailwind/react";

export default function CreateMaterialModal({ onClose }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    pk_giro: 0,
    nombre: "",
    urlImagen: "",
  });
  const handleSave = () => {
    setLoading(true);
    fetch("/api/gow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
        onClose();
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error en la solicitud:", error);
      });
  };

  return (
    <div>
      <Dialog
        open={true}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        static
        onClose={() => null}
      >
        <div className="flex items-center justify-between">
          <DialogHeader>Creando categoria</DialogHeader>
          <button onClick={onClose} className="cursor-pointer">
            <XMarkIcon className="mr-3 h-5 w-5" />
          </button>
        </div>
        <DialogBody divider>
          <div className="grid gap-6">
            <div className="w-full">
              <Select
                label="Seleccione el giro"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                onChange={(e) => {
                  setFormData({ ...formData, pk_giro: e });
                }}
                value={""}
              >
                <Option value="1">1</Option>
                <Option value="2">2</Option>
              </Select>
            </div>
            <Input
              label="Ingrese el nombre de la categoría"
              onChange={(e) =>
                setFormData({ ...formData, nombre: e.target.value })
              }
            />

            <Input
              label="Ingrese la URL de la imagen"
              onChange={(e) =>
                setFormData({ ...formData, urlImagen: e.target.value })
              }
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button color="red" variant="text" onClick={onClose} className="mr-1">
            <span>Cancelar</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={handleSave}
            disabled={loading}
          >
            {loading && <Spinner color="white" />}
            <span>{loading ? "" : "Guardar"}</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
