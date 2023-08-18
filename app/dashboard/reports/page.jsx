"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

export default function ReportPage() {
  const docentes = [
    { name: "Docente", descripcion: "Asistencia del docente" },
    { name: "1° GRADO", descripcion: "Asistencia del 1° grado" },
    { name: "2° GRADO", descripcion: "Asistencia del 2° grado" },
    { name: "3° GRADO", descripcion: "Asistencia del 3° grado" },
    { name: "4° GRADO", descripcion: "Asistencia del 4° grado" },
    { name: "5° GRADO", descripcion: "Asistencia del 6° grado" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {docentes.map((post) => {
        return (
          <div key={post.name}>
            <Card
              key={post.name}
              isFooterBlurred
              className="h-[150px] col-span-12 sm:col-span-7"
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-black/60 uppercase font-bold">
                  {post.name}
                </p>
                <h4 className="text-black/90 font-medium text-xl">
                  {post.descripcion}
                </h4>
              </CardHeader>
              <CardFooter className="absolute bg-verde bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                  <div className="flex flex-col">
                    <p className="text-tiny text-white/80">Reporte</p>
                    <p className="text-tiny text-white/80">
                      Descarga los detalles de la asistencía.
                    </p>
                  </div>
                </div>
                <Button radius="full" size="sm" color="danger">
                  Descargar
                </Button>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
