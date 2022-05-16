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
    <div className="w-full h-screen flex flex-col justify-center items-center text-white ">
      <main>
        <section>
          <div className="login w-[25rem] h-[30rem] flex justify-evenly items-center flex-col  ">
            <h2 className="titulo">Cadastro de usuário</h2>
            <form className="flex flex-col space-y-3" onSubmit={enviar}>
              <div className="box-input">
                <label htmlFor="">nome: </label>
                <input
                  className="input"
                  id="nome"
                  type="text"
                  placeholder="Digite seu nome"
                />
              </div>
              <div className="box-input">
                <label htmlFor="">senha: </label>
                <input
                  className="input"
                  id="senha"
                  type="password"
                  placeholder="Digite sua senha"
                />
              </div>
              <div className="box-input">
                <label htmlFor="">cpf: </label>
                <input
                  className="input"
                  id="cpf"
                  type="text"
                  placeholder="Digite seu cpf "
                />
              </div>
              <button className="button" type="submit">
                Enviar
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
export default Cadastrar;
