
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useState } from "react";


function Login() {

  const [mostrarPassword, setMostrarPassword] = useState(false);
  const visibilidadPassword = () => {
    setMostrarPassword(!mostrarPassword);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const cuentaEjemplo = {
    email: "example@example.com",
    password: "Hola12@"
  };

  const iniciarSesion = (e) => {
    e.preventDefault();// Evita que el formulario recargue la página
    if (email == cuentaEjemplo.email && password == cuentaEjemplo.password) {
      setLoginError(false);
      console.log("Inicio Exitoso");
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className="flex flex-row w-screen h-screen bg-custom-blanco" >
      {/* Lado izquierdo 1/3 de la pantalla */}
      <div className="  bg-custom-azul text-white p-20 content-center hidden lg:block w-1/3">
        <h1 className="text-6xl font-bold">SGD</h1>
        <h2 className="text-3xl" >Sistema de Gestión <br />de Denuncias</h2>
      </div>
      {/* Lado derecho 2/3 de la pantalla */}
      <div className="w-full flex flex-col justify-center items-center gap-14 lg:w-2/3 ">
        <img src="/public/sgd_logo_azul.png" alt="" className="w-72 lg:hidden" />
        <h2 className="text-custom-negro text-3xl font-semibold">Iniciar sesión</h2>
        {/* Formulario + button ingresar */}
        <div className="flex flex-col gap-8 " >
          <form onSubmit={iniciarSesion} className="flex flex-col gap-8 ">
            <input
              className={`h-14 w-72 bg-custom-blanco border px-2 rounded-lg focus:outline-none focus:ring-1 ${loginError ? 'border-custom-error focus:border-custom-error focus:ring-custom-error' : 'border-custom-gris focus:border-custom-azul focus:ring-custom-azul'}`}
              type="email"
              placeholder="Correo electrónico"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
            <div className="relative w-72">
              <input
                className={`h-14 w-72 bg-custom-blanco border px-2 rounded-lg focus:outline-none focus:ring-1 ${loginError ? 'border-custom-error focus:border-custom-error focus:ring-custom-error' : 'border-custom-gris focus:border-custom-azul focus:ring-custom-azul'}`}
                type={mostrarPassword ? "text" : "password"}
                placeholder="Contraseña"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
              {loginError && <p className="text-custom-error text-sm">Correo o contraseña incorrectos</p>}
              <div
                className="absolute right-4 top-4 cursor-pointer text-custom-gris"
                onClick={visibilidadPassword} >
                {mostrarPassword ? (<BsEyeSlashFill size={24} />) : (<BsEyeFill size={24} />)}
              </div>
            </div>

          </form>
          <button
            className="h-11 w-72 text-lg font-medium bg-custom-azul rounded-lg text-custom-blanco
            hover:bg-blue-900"
            type="submit"
            onClick={iniciarSesion}>Ingresar</button>
        </div>
        <img src="/public/Minseg_logo_black.png" alt="" className="h-11" />
      </div>
    </div>
  )
}

export default Login
