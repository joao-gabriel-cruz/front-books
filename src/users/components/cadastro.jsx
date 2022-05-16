import { Link } from 'react-router-dom';

function Cadastrar() {
  function enviar(event) {
    event.preventDefault();

    console.log(event.target.nome.value);

    const data = {
      nome: event.target.nome.value,
      senha: event.target.senha.value,
      cpf: event.target.cpf.value,
    };

    fetch('http://localhost:3333/users/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
  }

  return (
    <section className="flex">
      <div className="w-[50%] ">
        <img
          className="h-[100vh]"
          src="https://images.unsplash.com/photo-1652516669547-94aa2eacd6b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
      </div>
      <div className=" w-[50%] h-screen flex justify-center space-y-5 items-center flex-col  ">
        <h2 className="titulo">Cadastro de usuário</h2>
        <form className="flex flex-col space-y-3" onSubmit={enviar}>
          <div className="box-input">
            <label className="subTitulo">nome: </label>
            <input id="nome" type="text" placeholder="Digite seu nome" />
          </div>
          <div className="box-input">
            <label className="subTitulo">senha: </label>
            <input id="senha" type="password" placeholder="Digite sua senha" />
          </div>
          <div className="box-input">
            <label className="subTitulo">cpf: </label>
            <input id="cpf" type="text" placeholder="Digite seu cpf " />
          </div>
          <button className="button" type="submit">
            Enviar
          </button>
          <Link className="subTitulo" to="/">
            Fazer Login
          </Link>
        </form>
      </div>
    </section>
  );
}
export default Cadastrar;
