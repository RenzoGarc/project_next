import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import GoogleButton from "@components/global/GoogleButton";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { Button } from "@nextui-org/react";
import { UserIcon } from "./UserIcon";
import { Image } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";

const Signin = () => {
  let [isOpen, setIsOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const [formData, setFormData] = useState({
    user: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (!formData.user) {
      errors.user = "El usuario es obligatorio";
      valid = false;
    }

    if (!formData.password) {
      errors.password = "La contraseña es obligatoria";
      valid = false;
    }

    setFormErrors(errors);

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      try {
        const response = await fetch("URL_DE_TU_API", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Aquí puedes manejar una respuesta exitosa, como redirigir a otra página.
          console.log("Formulario enviado con éxito");
        } else {
          // Maneja errores de la API aquí
          console.error("Error al enviar el formulario a la API");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    }
  };

  return (
    <>
      <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:pr-0">
        <div className="hidden lg:block">
          <Button color="primary" variant="ghost" onClick={openModal}>
            Iniciar sesión
          </Button>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8">
                      <div className="group relative flex w-full justify-center">
                        <Image
                          width={100}
                          height={100}
                          alt="Logo GOW"
                          src="/assets/logo/gow.png"
                        />
                      </div>
                      <div className="group relative flex w-full justify-center">
                        <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900">
                          Inicia sesión
                        </h2>
                      </div>
                      <Divider className="my-2" />
                      <form className="mt-8 space-y-6" action="#" method="POST">
                        <div className="group relative flex w-full justify-center">
                          <Input
                            id="user"
                            color="warning"
                            name="user"
                            type="text"
                            label="Usuario"
                            variant="bordered"
                            placeholder="Ingrese su usuario"
                            autoComplete="user"
                            value={formData.user}
                            onChange={handleInputChange}
                            required
                            className="max-w-xs"
                          />
                        </div>
                        <div className="group relative flex w-full justify-center">
                          <Input
                            label="Contraseña"
                            variant="bordered"
                            placeholder="Ingrese su contraseña"
                            id="password"
                            color="warning"
                            name="password"
                            autoComplete="password"
                            required
                            value={formData.password}
                            onChange={handleInputChange}
                            endContent={
                              <button
                                className="focus:outline-none"
                                type="button"
                                onClick={toggleVisibility}
                              >
                                {isVisible ? (
                                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                )}
                              </button>
                            }
                            type={isVisible ? "text" : "password"}
                            className="max-w-xs"
                          />
                        </div>
                        <div className="group relative flex w-full justify-center ">
                          <Button
                            color="danger"
                            fullWidth
                            onClick={(e) => {
                              handleSubmit(e);
                            }}
                            startContent={<UserIcon />}
                          >
                            Iniciar sesión
                          </Button>
                        </div>
                        <GoogleButton title="Continuar con Google"></GoogleButton>
                      </form>
                    </div>
                  </div>
                  <div className="mt-1 flex justify-end">
                    <Button
                      color="primary"
                      variant="ghost"
                      onClick={closeModal}
                    >
                      Aún no, gracias!
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Signin;
