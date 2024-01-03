import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div id="general-container" className="general-container bg-white d-flex flex-column justify-content-between">
      <Nav />
      <div id="main" className="d-flex flex-column justify-content-center align-items-center">
        <span className="fs2 p-0 m-0 d-flex flex-column justify-content-center align-items-center">
          <span>Bem-vindo a</span>
          <span>
            <span className="text-green">EDU</span><span>digital Learn</span>
          </span>
          <form className="my-3 d-flex flex-column gap-2" method="post">
            <input type="text" name="username" placeholder="Username"
              className="border border-1 rounded-3 border-green px-2 fs-6"/>
              <input type="password" name="password" placeholder="Password"
                className="border border-1 rounded-3 border-green px-2 fs-6"/>
                <div className="buttons d-flex flex-column gap-2">
                  <div className="text-end">
                    <a href="#" className="text-decoration-none text-grey">Recuperar palavra-passe</a>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="submit border border-1 rounded-4 border-green bg-green text-white px-4">Sign In</button>
                  </div>
                </div>
              </form>
            </span>
          </div>
          <Footer />
      </div>
      )
}
