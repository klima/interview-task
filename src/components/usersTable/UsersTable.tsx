import { IUser } from '../../types/users.type';

const UsersTable = ({ items, page, setPage }: { items: IUser[]; page: number; setPage: (newPage: number) => void }) => {
  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item: IUser) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <div>Page: {page}</div>
        <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
          Prev
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default UsersTable;
