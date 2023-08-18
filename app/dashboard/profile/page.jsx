"use client";
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import GeneralPage from "./general";
import BillingPage from "./billing";
import { Typography } from "@mui/material";

export default function ProfilePage() {
  const data = [
    {
      label: "General",
      value: "dashboard",
      icon: Square3Stack3DIcon,
      desc: <GeneralPage></GeneralPage>,
    },
    {
      label: "Pagos",
      value: "profile",
      icon: UserCircleIcon,
      desc: <BillingPage />,
    },
    {
      label: "Equipo",
      value: "team",
      icon: Cog6ToothIcon,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Seguridad",
      value: "settings",
      icon: Cog6ToothIcon,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <div className="container mx-auto p-8 rounded-lg border shadow-lg">
      <div className="mt-8 mb-4">
        <Typography variant="h6" component="h6">
          Detalles básicos
        </Typography>
      </div>
      <div>
        <Tabs value="dashboard">
          <TabsHeader>
            {data.map(({ label, value, icon }) => (
              <Tab key={value} value={value}>
                <div className="flex items-center gap-2">
                  {React.createElement(icon, { className: "w-5 h-5" })}
                  {label}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
}
