import Link from 'next/link';

export async function getStaticProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return {
      props: { users },
      revalidate: 60
    };
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return {
      props: { users: [] },
      revalidate: 60
    };
  }
}

export default function Home({ users }) {
  return (
    <div>
      <h1>Daftar Pengguna</h1>
      
      {users.map((user) => (
        <div key={user.id}>
          <h2>
            <Link href={`/users/${user.id}`}>
              {user.name}
            </Link>
          </h2>
          <p>Email: {user.email}</p>
          <p>Perusahaan: {user.company.name}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}