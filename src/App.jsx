import { Header, Main, Footer } from './components';

const App = () => {
  return(
    <div className="flex flex-col w-full m-auto h-screen min-h-screen bg-light-gray font-pix text-sm">
      <Header />
      <Main />
      <Footer />
    </div>

  )
}
export default App
