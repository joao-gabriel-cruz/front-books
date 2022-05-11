import BuscarLivros from './components/buscarLivros';
import CadastrarLivro from './components/cadastrarLivro';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('http://localhost:3333/books')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex">
      <div className="w-[50%]">
        <div>
          <h1>Meus livros</h1>
        </div>
        <div>
          <BuscarLivros data={data} />
        </div>
      </div>
      <div className="w-[50%] h-screen flex items-center justify-center">
        <CadastrarLivro />
      </div>
    </div>
  );
}

export default App;
