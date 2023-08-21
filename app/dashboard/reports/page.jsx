"use client";
import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";
import { getReport, getReportWithId } from "../services/reports";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import { Toaster, toast } from "sonner";

const BASE_URL_PUBLIC = "http://localhost:7000/public/";

export default function ReportPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [validationState, setValidationState] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const docentes = [
    { id: "D", name: "Docente", descripcion: "Asistencia del docente" },
    { id: "1", name: "1° GRADO", descripcion: "Asistencia del 1° grado" },
    { id: "2", name: "2° GRADO", descripcion: "Asistencia del 2° grado" },
    { id: "3", name: "3° GRADO", descripcion: "Asistencia del 3° grado" },
    { id: "4", name: "4° GRADO", descripcion: "Asistencia del 4° grado" },
    { id: "5", name: "5° GRADO", descripcion: "Asistencia del 5° grado" },
  ];

  const [isLoadingStates, setIsLoadingStates] = useState(
    docentes.map(() => false)
  );

  const handleDateChange = (event) => {
    const { value } = event.target;
    setSelectedDate(value);
    validateDate(value);
  };

  const validateDate = (date) => {
    if (date) {
      setValidationState("");
      setErrorMessage("");
    } else {
      setValidationState("invalid");
      setErrorMessage("Debe seleccionar la fecha para descargar");
    }
  };

  const handleReport = async (id, index) => {
    try {
      if (!selectedDate) {
        validateDate(selectedDate);
        return;
      }
      setIsLoadingStates((prevState) => {
        const newState = [...prevState];
        newState[index] = true;
        return newState;
      });
      let data = { fecha: selectedDate, tipo: id };
      const marcaciones = await getReportWithId(data);
      if (marcaciones.data.length > 0) {
        marcaciones.extra = data;
        const reportUrl = await getReport(marcaciones);
        const downloadLink = document.createElement("a");
        downloadLink.href = BASE_URL_PUBLIC + reportUrl.data;
        downloadLink.target = "_blank";
        downloadLink.download = "informe.pdf";
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        toast.success("El archivo ha sido generado exitosamente.");
      } else {
        toast("No hay información para exportar.");
      }
    } catch (error) {
      toast.error("No se pudo generar el archivo, intente más tarde.");
      console.error("Error al obtener el informe:", error);
    } finally {
      setIsLoadingStates((prevState) => {
        const newState = [...prevState];
        newState[index] = false;
        return newState;
      });
    }
  };

  return (
    <div>
      <Toaster richColors position="top-center" />
      <div className="mb-4">
        <span>Ingrese una fecha para reportar</span>
        <Input
          type="date"
          variant="bordered"
          className="max-w-xs"
          value={selectedDate}
          onChange={handleDateChange}
          validationState={validationState}
          errorMessage={errorMessage}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {docentes.map((post, key) => {
          return (
            <div key={key}>
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
                  <Button
                    isLoading={isLoadingStates[key]}
                    radius="full"
                    size="sm"
                    color="danger"
                    onClick={() => handleReport(post.id, key)}
                  >
                    {isLoadingStates[key] ? "Procesando" : "Descargar"}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
