import BuscarLivros from './components/buscarLivros';
import CadastrarLivro from './components/cadastrarLivro';
import { useEffect, useState } from 'react';
import './transição.css';
import AtualizarLivros from './components/atualizarLivros';

function Books() {
  const [data, setData] = useState();

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

    const navBusca = document.getElementById('navBusca');
    const navAtualizar = document.getElementById('navAtualizar');

    console.log('buscar');

    navBusca.classList.add('marcador');
    navAtualizar.classList.remove('marcador');

    buscarLivros.classList.remove('show');
    atualizarLivro.classList.add('show');
  }
  function showAtualizar() {
    const buscarLivros = document.querySelector('#BuscarLivros');
    const atualizarLivro = document.querySelector('#AtualizarLivros');

    const navBusca = document.getElementById('navBusca');
    const navAtualizar = document.getElementById('navAtualizar');
    console.log('atualizar');

    navAtualizar.classList.add('marcador');
    navBusca.classList.remove('marcador');

    atualizarLivro.classList.remove('show');
    buscarLivros.classList.add('show');
  }

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
                className="ease-in duration-300 hover:underline underline-offset-8 hover:text-[#0de02c] "
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
export default Books;
