import { useEffect, useState } from 'react';
import { getComments, IComment } from './services/api/api';
import CommentsTable from './components/commentsTable/CommentsTable';

function App() {
  const [comments, setComments] = useState([] as IComment[]);
  const [commentsPage, setCommentsPage] = useState(1);

  useEffect(() => {
    async function fetchComments(page: number = 1) {
      const newComments: IComment[] = await getComments(page);

      setComments(comments => [...comments, ...newComments]);
    }

    commentsPage > comments.length / 10 && fetchComments(commentsPage);
  }, [comments.length, commentsPage]);

  return (
    <div className="App">
      Page: {commentsPage}
      Comments: {comments.length}
      <CommentsTable items={comments} page={commentsPage} setPage={(newPage: number) => setCommentsPage(newPage)} />
    </div>
  );
}

export default App;
