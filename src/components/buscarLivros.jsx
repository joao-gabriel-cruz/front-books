import { useState, useEffect } from 'react';
import Livro from './Livro';

function BuscarLivros({ data }) {
  const [livros, setLivros] = useState();
  const [especifico, setEspecifico] = useState();
  const [filter, setFilter] = useState();

  useEffect(() => {
    setLivros(data);
  }, [data]);

  function procurarLivro() {
    const name = document.getElementById('livro').value;
    const filter = data.filter((item) => item.nome.includes(name));
    setLivros(filter);
  }

  function detalhes(nome) {
    setEspecifico(!especifico);
    setFilter(nome);
    console.log(nome);
    document.getElementById('livro').value = '';
  }

  return (
    <div className="flex flex-col space-y-2 ">
      <div className="flex flex-col ">
        <label className="font-bold text-2xl">Procure o seu Livro</label>
        <input
          id="livro"
          className="bg-[#e3dede] w-[15rem] rounded-lg p-2 "
          type="text"
          placeholder="nome do livro"
          onChange={procurarLivro}
        />
      </div>

      {livros && (
        <ul>
          {livros.map((item) => (
            <li key={item.nome} className="font-semibold">
              Livro:{' '}
              <button
                onClick={() => detalhes(item.nome)}
                className="text-[#fc6868]"
              >
                {item.nome}
              </button>
            </li>
          ))}
          {especifico && (
            <div className="bg-[#f0f0f0] rounded-xl	">
              <Livro data={[livros, filter]} />
            </div>
          )}
        </ul>
      )}
    </div>
  );
}
export default BuscarLivros;
