import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Dashboard() {


return <div>Dashboard</div>
}

export const getServerSideProps = withPageAuthRequired() 
