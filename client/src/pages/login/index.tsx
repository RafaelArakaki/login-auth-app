import { FormEvent, useContext } from "react";
import { AuthContext } from "../../context/auth";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmitLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get('email')?.toString();
    const password = data.get('password')?.toString();

    if (email && password) {
      try {
        await signIn(email, password);
        navigate("/");
      }
      catch (error) {
        alert(error)
      }
    }
    
  }

  return (
    <div className="h-full flex items-center justify-center bg-pattern bg-no-repeat bg-center bg-cover">
      <form
        className="w-80 bg-gray-800 p-6 rounded-md"
        onSubmit={onSubmitLogin}
      >
        <h2 className="font-bold text-gray-200 text-2xl mt-4 mb-12">Acesse a sua conta</h2>
        <div className="flex flex-col gap-2 [&>label]:text-sm [&>label]:text-gray-200 mb-3">
          <label className="text-gray-200">E-mail:</label>
          <div className="group flex w-full h-12 px-4 py-3 justify-center items-center gap-2 rounded-md border border-solid border-gray-700 bg-gray-900 box-border transition-opacity focus-within:border-purpleseat-base">
            <input
              name="email"
              type="text"
              className="outline-none border-none w-full h-full text-gray-100 text-base font-normal bg-transparent placeholder:text-gray-400 transition-colors"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 [&>label]:text-sm [&>label]:text-gray-200 mb-3">
          <label className="text-gray-200">Senha:</label>
          <div className="group flex w-full h-12 px-4 py-3 justify-center items-center gap-2 rounded-md border border-solid border-gray-700 bg-gray-900 box-border transition-opacity focus-within:border-purpleseat-base mb-3">
            <input
              name="password"
              type="password"
              className="outline-none border-none w-full h-full text-gray-100 text-base font-normal bg-transparent placeholder:text-gray-400 transition-colors"
              autoComplete="off"
            />
          </div>
        </div>
        
        <button
          type="submit"
          className="bg-violet-700 hover:bg-violet-600 text-white w-full py-2 rounded-md mb-5"
        >
          Entrar
        </button>

        <p className="text-center text-white text-sm">
          Não possui conta?{" "}
          <Link className="text-violet-300 hover:text-violet-100" to="/register">
            Criar conta.
          </Link>
        </p>
      </form>
    </div>
  )  
}

export default LoginPage;