import { useUser } from '@auth0/nextjs-auth0'
import Link from 'next/Link'

export default function Home() {

  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  
  return (

   <div>
     Header 
      <nav>
        {! user && ( 
        <Link href="/api/auth/login">
          <a>Login</a>
        </Link>
        )}


      { user && (

        <>
        <img src={user.picture} alt={user.name} />
              <Link href="/api/auth/logout">
              <a>Logout</a>
            </Link>

        </>

      )}




      </nav>
   </div>

  )
}
