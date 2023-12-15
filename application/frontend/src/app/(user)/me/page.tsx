import Image from 'next/image';
import { getSession } from '@auth0/nextjs-auth0';

interface User {
  picture: string;
  name: string;
  email: string;
}

export default async function ProfileServer() {
  const session = await getSession();
  const user: User = session?.user as User;

  return (
    user && (
      <div>
        <Image
          src={user.picture}
          alt={user.name}
          width={80}
          height={80}
        />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}