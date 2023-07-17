import dynamic from "next/dynamic";
import { getMaterial } from "@data/gow/materiales";

const TableGow = dynamic(
  () => import("@components/dashboard/gowapp/TableGow"),
  { ssr: false }
);

export default async function MaterialPage() {
  const response = await getMaterial();
  return <TableGow respuesta={response.data}></TableGow>;
}
