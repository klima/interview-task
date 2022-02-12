import CommentsTable from './components/commentsTable/CommentsTable';
import UsersTable from './components/usersTable/UsersTable';
import useFetch from './hooks/useFetch/useFetch';
import type { IComment } from './types/comments.type';
import type { IUser } from './types/users.type';

function App() {
  const [comments, commentsPage, setCommentsPage, isLoadingComments] = useFetch<IComment>('comments');
  const [users, usersPage, setUsersPage, isLoadingUsers] = useFetch<IUser>('users');

  return (
    <div className="App">
      {isLoadingComments ? (
        <div>Loading comments...</div>
      ) : (
        <CommentsTable items={comments} page={commentsPage} setPage={(newPage: number) => setCommentsPage(newPage)} />
      )}
      {isLoadingUsers ? (
        <div>Loading users...</div>
      ) : (
        <UsersTable items={users} page={usersPage} setPage={(newPage: number) => setUsersPage(newPage)} />
      )}
    </div>
  );
}

export default App;
