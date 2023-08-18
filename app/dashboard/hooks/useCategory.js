import { useQuery } from "@tanstack/react-query";
import { fetchCategorybyId } from "../services/category";

export const useCategorybyId = (id) => {
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ["categorybyid", id],
    queryFn: () => fetchCategorybyId(id),
  });
  return {
    refetch,
    isLoading,
    isError,
    data,
  };
};
