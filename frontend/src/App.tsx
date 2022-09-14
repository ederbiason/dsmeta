import { Header, SalesCard } from "./components"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <ToastContainer />
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
