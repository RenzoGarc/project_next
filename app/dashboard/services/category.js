export const fetchCategorybyId = async (id) => {
  return await fetch(`http://localhost:3000/api/gow/categories/` + id).then(
    async (res) => {
      if (!res.ok) throw new Error("Error en la petición");
      return await res.json();
    }
  );
};
