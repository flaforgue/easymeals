import Sidenav from '../../components/Sidenav';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="min-w-screen bg-gray-200">
      <aside className="fixed top-0 left-0 w-64 h-screen">
        <Sidenav />
      </aside>
      <div className="min-h-screen p-4 sm:ml-64">
        {children}
      </div>
    </section>
  )
}