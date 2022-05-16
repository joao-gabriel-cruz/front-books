import { useState } from 'react';

function AtualizarLivros({ data }) {
  const [atualizar, setAtualizar] = useState();

  function showAtualizar() {
    const buscar = document.querySelector('#Buscar');
    const atualizar = document.querySelector('#Atualizar');

    atualizar.classList.remove('show');
    buscar.classList.add('show');
  }

  function deletar() {
    const id = document.getElementById('id').value;

    fetch(`http://localhost:3333/books/${id}`, {
      method: 'delete',
    })
      .then((res) => console.log(res))
      .catch((err) => alert(err));
    document.getElementById('id').value = '';
  }

  function procurarLivro() {
    const id = document.getElementById('id').value;
    const filter = data.filter((item) => item.id === id);

    if (filter.length < 1) {
      throw alert('Livro não encontrado');
    }
    setAtualizar(filter);

    document.getElementById('id').value = '';

    setTimeout(() => {
      showAtualizar();
    }, 1);
  }

  function Atualizar(event) {
    event.preventDefault();

    if (atualizar) {
      let dataAtualizada = {
        nome: event.target.nome.value,
        escritor: event.target.escritor.value,
        ano: event.target.ano.value,
        genero: event.target.genero.value,
        paginas: event.target.pagina.value,
      };

      fetch(`http://localhost:3333/books/${atualizar[0].id}`, {
        method: 'PUT',
        body: JSON.stringify(dataAtualizada),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err));
      event.target.nome.value = '';
      event.target.escritor.value = '';
      event.target.ano.value = '';
      event.target.genero.value = '';
      event.target.pagina.value = '';
    }
  }

  return (
    <div>
      <div id="Buscar" className="flex flex-col space-y-2 ">
        <div className="flex flex-col ">
          <label className="font-bold text-2xl">Atualiza/delete o livro</label>
          <input
            id="id"
            className="bg-[#e3dede] w-[15rem] rounded-lg p-2 "
            type="text"
            placeholder="nome do livro"
          />
        </div>
        <div className="flex justify-center space-x-5">
          <button onClick={procurarLivro} className="button">
            Buscar
          </button>
          <button onClick={deletar} className="button">
            deletar
          </button>
        </div>
      </div>
      {atualizar && (
        <div id="Atualizar" className="show">
          <div className="flex flex-col text-xl space-y-5 ">
            <h2 className="pl-6 font-bold text-3xl">
              Atualizar {atualizar[0].nome}
            </h2>
            <form
              onSubmit={Atualizar}
              className="flex flex-col w-[20rem] space-y-2  rounded-xl"
            >
              <label htmlFor="">Nome do livro:</label>
              <input
                id="nome"
                className="bg-[#e3dede] rounded-lg p-2 "
                type="text"
                placeholder="Nome"
              />
              <label htmlFor="">Escritor do Livro:</label>
              <input
                id="escritor"
                className="bg-[#e3dede] rounded-lg p-2 "
                type="text"
                placeholder="Escritor"
              />
              <label htmlFor="">Ano do Livro:</label>
              <input
                id="ano"
                className="bg-[#e3dede] rounded-lg p-2 "
                type="number"
                placeholder="Ano"
              />
              <label htmlFor="">Genero do Livro:</label>
              <input
                id="genero"
                className="bg-[#e3dede] rounded-lg p-2 "
                type="text"
                placeholder="Genero"
              />
              <label htmlFor="">Paginas do Livro:</label>
              <input
                id="pagina"
                className="bg-[#e3dede] rounded-lg p-2 "
                type="number"
                placeholder="Paginas"
              />
              <button className="button " type="submit">
                Atualizar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
export default AtualizarLivros;
