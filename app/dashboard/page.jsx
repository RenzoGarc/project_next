import Dashboard from '@components/dashboard/Dashboard';
// import dynamic from 'next/dynamic'
// const Dashboard = dynamic(() => import('@components/dashboard/Dashboard'), { ssr: false })
export default function DashboardPage() {
  return (
    <div>
      <Dashboard/>
    </div>
  );
}