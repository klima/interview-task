import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com';
const itemsLimitPerPage = 10;

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const getComments = async (page: number = 1): Promise<IComment[]> => {
  const { data }: { data: IComment[] } = await axios.get(
    `${apiUrl}/comments?_start=${page === 1 ? '0' : (page - 1) * itemsLimitPerPage}&_limit=${itemsLimitPerPage}`,
  );

  console.log(data);

  return data;
};
