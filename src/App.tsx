import CommentsTable from './components/commentsTable/CommentsTable';
import useTable from './hooks/useTable/useTable';
import { IComment } from './services/api/api';

function App() {
  const [comments, commentsPage, setCommentsPage] = useTable<IComment>([]);

  return (
    <div className="App">
      Page: {commentsPage}
      Comments: {comments.length}
      <CommentsTable items={comments} page={commentsPage} setPage={(newPage: number) => setCommentsPage(newPage)} />
    </div>
  );
}

export default App;
