import dynamic from "next/dynamic";

import { Button } from "@nextui-org/button";
const Dashboard = dynamic(() => import("@components/dashboard/Dashboard"), {
  ssr: false,
});
export default function DashboardPage() {
  // return <Dashboard />;

  return <Button color="primary">Press me</Button>;
}
