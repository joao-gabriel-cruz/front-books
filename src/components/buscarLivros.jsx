import { useState, useEffect } from 'react';

function BuscarLivros({ data }) {
  const [livros, setLivros] = useState();

  useEffect(() => {
    setLivros(data);
  }, [data]);

  console.log(livros);
  function procurarLivro() {
    const name = document.getElementById('livro').value;
    const filter = data.filter((item) => item.nome === name);

    setLivros(filter);
  }

  return (
    <div>
      <input
        id="livro"
        className="bg-[#e3dede] rounded-lg p-2 "
        type="text"
        placeholder="nome do livro"
        onChange={procurarLivro}
      />
      <button
        className="bg-black text-white p-2 rounded-lg hover:bg-[#1c1c1c] ease-in duration-300 "
        type="submit"
        onClick={procurarLivro}
      >
        Buscar
      </button>
      {livros && (
        <ul>
          {livros.map((item) => (
            <li>{item.nome} </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default BuscarLivros;
