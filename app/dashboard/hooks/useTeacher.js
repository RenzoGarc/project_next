import { useQuery } from "@tanstack/react-query";
import { fetchTeachers } from "../services/teacher";

export const useTeacher = () => {
  const { isLoading, isError, data, refetch } = useQuery(
    ["teachers"],
    fetchTeachers
  );
  return {
    refetch,
    isLoading,
    isError,
    teacher: data,
  };
};
