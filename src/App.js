import Main from './pages/Main';
import Single from './pages/Single';
import './scss/App.scss'

function App() {
  return (
    <>
    <div className="container">
      {/* <Main/> */}
      <Single/>
      <footer>* Приложение разработано для портфолио. <br/> Информация не соответсвует действительности.</footer>
    </div>

    </>
  );
}

export default App;
