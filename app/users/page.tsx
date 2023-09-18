import Link from "next/link";
import React, { Suspense } from "react";
import { sort } from "fast-sort";

interface Users {
  id: number;
  name: string;
  email: string;
}

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: Users[] = await res.json();
  const sortedUsers = sort(users).asc((u) =>
    sortOrder === "email" ? u.email : u.name
  );

  return (
    <>
      <h1>Users {sortOrder}</h1>
      <Link href="/users/new" className="btn">
        New user
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <table className="table">
          <thead>
            <tr>
              <th>
                <Link href={"?sortOrder=name"}>Name</Link>
              </th>
              <th>
                <Link href={"?sortOrder=email"}>Email</Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Suspense>
    </>
  );
};

export default UsersPage;
