import useSWR from 'swr';

type TodoResponse = {
  id: number;
  text: string;
}[];

export const useTodoList = () => {
  const { data } = useSWR<TodoResponse>('/todos');

  return { data };
};
