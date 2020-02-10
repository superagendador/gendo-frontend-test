import React from "react";

const InitialForm = ({ user, error, btnAction, getUser }) => (
  
  <div className="InitialFormContainer mt-5">
    <h1>Digite o nome de usuário do Github...</h1>
    <p className="mb-4">Exemplo: "joao"</p>
    <input
      type="text"
      className="userInput"
      value={user}
      placeholder="Pesquisar usuário"
      onChange={e => getUser(e.target.value)}
    />
    <button className="btn btn-primary btn-sm searchBtn ml-2" onClick={btnAction}>
        Ir para o perfil
    </button>

    <p className="errorText">{error}</p>
  </div>
);

export default InitialForm;