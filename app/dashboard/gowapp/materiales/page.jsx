// import dynamic from "next/dynamic";
// import { getMaterial } from "@data/gow/materiales";
// import { Suspense } from "react";

// export default async function MaterialPage() {
//   const response = await getMaterial();
//   return (
//     <Suspense>
//       {response.data ? (
//         <TableGow respuesta={response.data}></TableGow>
//       ) : (
//         <>
//           <div>Algo pasó rey</div>
//         </>
//       )}
//     </Suspense>
//   );
// }
"use client";
import dynamic from "next/dynamic";
const TableGow = dynamic(
  () => import("@components/dashboard/gowapp/TableGow"),
  { ssr: false }
);

import { useState, useEffect } from "react";
import Loading from "./loading";

export default function MaterialPage() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/gow")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="flex items-center justify-center">
      <div className="w-11/12">
        <TableGow respuesta={data}></TableGow>
      </div>
    </div>
  );
}
