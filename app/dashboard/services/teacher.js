export const fetchTeachers = async () => {
  return await fetch(`http://localhost:3000/api/gow`).then(async (res) => {
    if (!res.ok) throw new Error("Error en la petición");
    return await res.json();
  });
};
