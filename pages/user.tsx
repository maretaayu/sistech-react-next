type UserProps = {
  id: number;
  name: string;
  email: string;
};

type UserListProps = {
  users: UserProps[];
};

export default function User({ users }: UserListProps) {
  return (
    <div>
      <h1>Users</h1>
      <div className="gap-4 flex">
        {users.map((user) => (
          <div key={user.id} className="bg-accent text-invert p-3">
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/?_limit=4"
  );
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
