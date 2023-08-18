"use client";

import { useTeacher } from "@app/dashboard/hooks/useTeacher";

export default function App() {
  const { isLoading, isError, teacher, refetch } = useTeacher();

  if (isLoading) {
    return <div>Cargando...</div>;
  }
  return <div>{JSON.stringify(teacher)}</div>;
}
