import BuscarLivros from './components/buscarLivros';
import CadastrarLivro from './components/cadastrarLivro';
import { useEffect, useState } from 'react';
import './components/transição.css';
import AtualizarLivros from './atualizarLivros';

function App() {
  const [data, setData] = useState();
  const [nav, setNav] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3333/books')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function showBusca() {
    const buscarLivros = document.querySelector('#BuscarLivros');
    const atualizarLivro = document.querySelector('#AtualizarLivros');

    setNav(!nav);

    if (!nav) {
      const navBusca = document.getElementById('navBusca');
      const navAtualizar = document.getElementById('navAtualizar');

      console.log('buscar');

      navBusca.classList.add('marcador');
      navAtualizar.classList.remove('marcador');
    }

    buscarLivros.classList.remove('show');
    atualizarLivro.classList.add('show');
  }
  function showAtualizar() {
    const buscarLivros = document.querySelector('#BuscarLivros');
    const atualizarLivro = document.querySelector('#AtualizarLivros');

    setNav(!nav);

    if (nav) {
      const navBusca = document.getElementById('navBusca');
      const navAtualizar = document.getElementById('navAtualizar');
      console.log('atualizar');

      navAtualizar.classList.add('marcador');
      navBusca.classList.remove('marcador');
    }

    atualizarLivro.classList.remove('show');
    buscarLivros.classList.add('show');
  }
  console.log(nav);
  return (
    <div className="flex flex-col bg ">
      <header className="flex w-screen h-[2rem] justify-around items-center">
        <div>
          <h1 className="font-bold text-2xl">Meus livros</h1>
        </div>
        <div>
          <nav className="flex space-x-5 ">
            <ul>
              <button
                className="ease-in duration-300 hover:underline underline-offset-8 hover:text-[#0de02c] "
                onClick={showBusca}
                id="navBusca"
              >
                Buscar Livros{' '}
              </button>
            </ul>
            <ul>
              <button
                id="navAtualizar"
                className="ease-in duration-300 hover:underline underline-offset-8 hover:text-[#0de02c] m "
                onClick={showAtualizar}
              >
                Atualizar Livro
              </button>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex">
        <div className="w-[50%]  flex items-center justify-center ">
          <div
            className="opacity-1 flex items-center justify-center"
            id="AtualizarLivros"
          >
            <AtualizarLivros data={data} />
          </div>
          <div
            id="BuscarLivros"
            className="show flex items-center justify-center"
          >
            <BuscarLivros data={data} />
          </div>
        </div>
        <div className="w-[50%] h-screen flex items-center justify-center ">
          <div className="">
            <CadastrarLivro />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
