"use client";

import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
  Chip,
} from "@material-tailwind/react";
import CreateMaterialModal from "./CreateMaterial";
import { useEffect, useState } from "react";

const TABLE_HEAD = ["Giro", "Imágen", "Nombre", "Acciones"];

export default function TableGow({ respuesta }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(respuesta);
  }, [respuesta]);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Materiales
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Gestiona tus materiales fácil y rápido
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Buscar"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
            <Button
              className="flex items-center gap-3"
              color="blue"
              size="sm"
              onClick={handleOpenModal}
              variant="gradient"
            >
              <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Agregar
              Categoria
            </Button>
            {modalOpen && <CreateMaterialModal onClose={handleCloseModal} />}
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {respuesta.map(({ imagen, nombre, id_cat, pk_giro }, index) => {
              const isLast = index === respuesta.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";
              return (
                <tr key={id_cat}>
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        size="sm"
                        variant="ghost"
                        value={pk_giro}
                        color={pk_giro === 1 ? "green" : "amber"}
                      />
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={imagen}
                        alt={nombre}
                        size="lg"
                        className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                      />
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-ligth"
                      >
                        {nombre}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Editar producto">
                      <IconButton variant="text" color="blue-gray">
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button variant="outlined" color="blue-gray" size="sm">
          Anterior
        </Button>
        <div className="flex items-center gap-2">
          <IconButton variant="outlined" color="blue-gray" size="sm">
            1
          </IconButton>
          <IconButton variant="text" color="blue-gray" size="sm">
            2
          </IconButton>
          <IconButton variant="text" color="blue-gray" size="sm">
            3
          </IconButton>
          <IconButton variant="text" color="blue-gray" size="sm">
            ...
          </IconButton>
          <IconButton variant="text" color="blue-gray" size="sm">
            8
          </IconButton>
          <IconButton variant="text" color="blue-gray" size="sm">
            9
          </IconButton>
          <IconButton variant="text" color="blue-gray" size="sm">
            10
          </IconButton>
        </div>
        <Button variant="outlined" color="blue-gray" size="sm">
          Siguiente
        </Button>
      </CardFooter>
    </Card>
  );
}
