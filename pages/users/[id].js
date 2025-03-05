import Link from 'next/link';

export async function getStaticPaths() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    
    const paths = users.map((user) => ({
      params: { id: user.id.toString() },
    }));

    return { paths, fallback: 'blocking' };
  } catch (error) {
    console.error('Failed to fetch user paths:', error);
    return { paths: [], fallback: 'blocking' };
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();
    
    return {
      props: { user },
      revalidate: 60
    };
  } catch (error) {
    console.error('Failed to fetch user details:', error);
    return {
      notFound: true,
    };
  }
}

export default function UserDetails({ user }) {
  if (!user) return <div>Memuat...</div>;

  return (
    <div>
      <h1>Detail Pengguna</h1>
      
      <h2>{user.name}</h2>
      
      <h3>Informasi Kontak</h3>
      <p>Email: {user.email}</p>
      <p>Telepon: {user.phone}</p>
      <p>Situs Web: {user.website}</p>
      
      <h3>Perusahaan</h3>
      <p>Nama: {user.company.name}</p>
      <p>Slogan: {user.company.catchPhrase}</p>
      <p>Bidang Usaha: {user.company.bs}</p>
      
      <h3>Alamat</h3>
      <p>
        {user.address.street}, {user.address.suite}<br />
        {user.address.city}, {user.address.zipcode}
      </p>
      
      <p>
        <Link href="/">Kembali ke Daftar Pengguna</Link>
      </p>
    </div>
  );
}