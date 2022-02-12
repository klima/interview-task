import CommentsTable from './components/commentsTable/CommentsTable';
import useFetch from './hooks/useFetch/useFetch';
import type { IComment } from './types/comments.type';

function App() {
  const [comments, commentsPage, setCommentsPage, isLoadingComments] = useFetch<IComment>('comments');

  return (
    <div className="App">
      Page: {commentsPage}
      Comments: {comments.length}
      {isLoadingComments ? (
        <div>Loading comments...</div>
      ) : (
        <CommentsTable items={comments} page={commentsPage} setPage={(newPage: number) => setCommentsPage(newPage)} />
      )}
    </div>
  );
}

export default App;
