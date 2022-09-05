import { Header, SalesCard } from "./components"

export const App = () => {
  return (
    <>
      <Header />

      <main>
        <section id='sales'>
          <div className="dsmeta-card">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}
