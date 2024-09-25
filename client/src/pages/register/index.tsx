import { FormEvent } from "react";
import { api } from "../../services/configs";
import { Link } from "react-router-dom";

const RegisterPage = () => {

  const handleSaveUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name')?.toString();
    const email = formData.get('email')?.toString();
    const password = formData.get('password')?.toString();

    const data = {
      name,
      email,
      password
    }

    const response = await api.post("/create", data);

    console.log(response.data)
  }

  return (
    <div className="h-full flex items-center justify-center bg-pattern bg-no-repeat bg-center bg-cover">
      <form
        className="w-80 bg-gray-800 p-6 rounded-md"
        onSubmit={handleSaveUser}
      >
        <h2 className="font-bold text-gray-200 text-2xl mt-4 mb-12">Cadastre a sua conta</h2>
        <div className="flex flex-col gap-2 [&>label]:text-sm [&>label]:text-gray-200 mb-3">
          <label className="text-gray-200">Nome:</label>
          <div className="group flex w-full h-12 px-4 py-3 justify-center items-center gap-2 rounded-md border border-solid border-gray-700 bg-gray-900 box-border transition-opacity focus-within:border-purpleseat-base">
            <input
              name="name"
              type="text"
              className="outline-none border-none w-full h-full text-gray-100 text-base font-normal bg-transparent placeholder:text-gray-400 transition-colors"
              autoComplete="off"
            />
          </div>
        </div>
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
          Cadastrar
        </button>
        <p className="text-center text-sm">
          <Link className="text-violet-300 hover:text-violet-100" to="/login">
            Entrar na conta
          </Link>
        </p>
      </form>
    </div>
  )  
}

export default RegisterPage;