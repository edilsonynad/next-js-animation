import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div id="general-container" className="general-container bg-white d-flex flex-column justify-content-between">

      <Nav />

      <div id="main" className="col-md-4 .col-sm-7 d-flex flex-column justify-content-center">
        <span id='form-container' className="shadow bg-white rounded fs2 p-5 m-5 d-flex flex-column justify-content-center align-items-center">
          <span className="welcome">Bem-vindo a</span>
          <span>
            <span className="text-green welcome">EDU</span><span  className="welcome">digital Learn</span>
          </span>
          <form className="my-3 d-flex flex-column gap-2 w-100" method="post">
            <input type="text" name="username" placeholder="Nome do utilizador"
              className="border border-2 rounded-3 border-green px-2 fs-6 form-control form-control-lg mb-3" />
            <input type="password" name="password" placeholder="Palavra-passe"
              className="border border-2 rounded-3 border-green px-2 fs-6 form-control form-control-lg" />
            <div className="buttons d-flex flex-column gap-2">
              <div className="text-end">
                <a href="#" className="text-decoration-none text-grey password-recover">Recuperar palavra-passe</a>
              </div>
              <div className="text-center">
                <button type="submit" className="submit border border-1 rounded-2 border-green bg-green text-white px-5 p-1">Entrar</button>
              </div>
            </div>
          </form>
        </span>
      </div>

      <Footer />

    </div>
  )
}
