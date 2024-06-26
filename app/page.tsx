// import { getUsers } from '@/lib/db';
import { UsersTable } from './users-table';
import { Search } from './search';

const users = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    username: 'alicej'
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    username: 'bsmith'
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    username: 'charlieb'
  },
  {
    id: 4,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    username: 'alicej'
  },
  {
    id: 5,
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    username: 'bsmith'
  },
  {
    id: 6,
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    username: 'charlieb'
  }
];
export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string; offset: string };
}) {
  const search = searchParams.q ?? '';
  const offset = searchParams.offset ?? 0;
  // const { users, newOffset } = await getUsers(search, Number(offset));

  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Users</h1>
      </div>
      <div className="w-full mb-4">
        <Search value={searchParams.q} />
      </div>
      <UsersTable
        users={users}
        // offset={newOffset}
      />
    </main>
  );
}
