import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { Avatar } from "@material-tailwind/react";

export default function GeneralPage() {
  return (
    <div className="container mx-auto">
      <Box mb={4} />
      <div className="container mx-auto p-8 rounded-lg border shadow-lg">
        <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3">
          <div className="flex-1 lg:w-1/4">
            <Typography variant="h6" component="h6">
              Detalles básicos
            </Typography>
          </div>
          <div className="flex-2 lg:w-3/4">
            <div className="mb-8">
              <Avatar
                src="https://yt3.googleusercontent.com/vRF8BHREiJ3Y16AbMxEi_oEuoQlnNNqGpgULuZ6zrWSAi24HcxX3Vko42RN8ToctH-G0qlWd=s900-c-k-c0x00ffffff-no-rj"
                alt="avatar"
                size="xxl"
              />
              <Button size="small">Editar</Button>
            </div>
            <div className="flex items-center space-x-2 mb-6 justify-end">
              <TextField
                className="flex-grow rounded-lg"
                id="outlined-basic"
                label="Nombres"
                variant="outlined"
              />
              <Button size="small" className="w-40">
                Guardar
              </Button>
            </div>
            <div className="flex items-center space-x-2 mb-6 justify-end">
              <TextField
                className="flex-grow rounded-lg"
                id="outlined-basic"
                label="Correo Electrónico"
                variant="outlined"
              />
              <Button size="small" className="w-40">
                Editar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
