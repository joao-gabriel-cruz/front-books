import { Link } from 'react-router-dom';

function Users() {
  return (
    <section className="w-full h-screen flex ">
      <div className="w-[50%] ">
        <img
          className="h-[100vh]"
          src="https://images.unsplash.com/photo-1652447163961-5e1ab9460372?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
      </div>
      <div className="w-[50%] h-[100vh] flex justify-center items-center  ">
        <div className=" flex justify-center items-center space-y-5 flex-col">
          <h2 className="titulo">Login</h2>
          <form className="flex flex-col space-y-3 w-[15rem] " action="">
            <input
              className="input"
              placeholder="Digite o nome de usuário "
              type="text"
            />
            <input
              className="input"
              placeholder="Digite sua Senha"
              type="password"
            />
            <div className="flex flex-col text-center space-y-3">
              <button className="button">Login</button>
              <Link className="subTitulo" to="/users/cadastro">
                Fazer Cadastro
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Users;
