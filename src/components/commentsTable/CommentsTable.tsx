import { IComment } from '../../services/api/api';

const CommentsTable = ({ items, page, setPage }: { items: IComment[]; page: number; setPage: (newPage: number) => void }) => {
  return (
    <div>
      <h1>Comments</h1>
      <table>
        <tr>
          <th>ID</th>
          <th>Post ID</th>
          <th>Name</th>
          <th>E-mail</th>
          <th>Comment</th>
        </tr>
        {items.slice((page - 1) * 10, page * 10).map((item: IComment) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.postId}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.body}</td>
          </tr>
        ))}
      </table>
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
          Prev
        </button>
        <button onClick={() => setPage(page + 1)} disabled={items.length / 10 < page}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CommentsTable;
