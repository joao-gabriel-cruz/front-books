import { useEffect, useState } from 'react';

function Livro({ data }) {
  const [livros, setLivros] = useState();

  useEffect(() => {
    const name = data[1];

    const filter = data[0].filter((item) => item.nome === name);
    setLivros(filter);
  }, []);

  return (
    <div className="drop-shadow-xl mt-[5rem]	">
      {livros && (
        <div>
          <div>
            <ul className="flex flex-col p-3 space-y-5  ">
              <div className=" justify-between w-[25rem]">
                <div className="space-y-1">
                  <li className="font-bold">
                    Livro:{' '}
                    <span className="text-[#800303]">{livros[0].nome}</span>.
                  </li>
                  <li className="font-bold">
                    Escritor:{' '}
                    <span className="text-[#800303]">{livros[0].escritor}</span>
                    .
                  </li>
                  <li className="font-bold">
                    Ano: <span className="text-[#800303]">{livros[0].ano}</span>
                    .{' '}
                  </li>
                </div>
                <div className="space-y-1">
                  <li className="font-bold">
                    Genero:{' '}
                    <span className="text-[#800303]">{livros[0].genero}</span>.{' '}
                  </li>
                  <li className="font-bold">
                    Paginas:{' '}
                    <span className="text-[#800303]">{livros[0].paginas}</span>.{' '}
                  </li>
                </div>
              </div>
              <div>
                <li className="font-bold">
                  ID:<span className="text-[#800303]">{livros[0].id}</span>
                </li>
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export default Livro;
