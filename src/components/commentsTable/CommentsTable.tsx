import { IComment } from '../../types/comments.type';

const CommentsTable = ({ items, page, setPage }: { items: IComment[]; page: number; setPage: (newPage: number) => void }) => {
  return (
    <div>
      <h1>Comments</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Post ID</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item: IComment) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.postId}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.body}</td>
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

export default CommentsTable;
