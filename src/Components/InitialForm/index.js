import React from "react";

const InitialForm = ({ user, error, btnAction, getUser }) => (
  <div className="InitialFromContainer">
    <input
      type="text"
      className="userInput"
      value={user}
      placeholder="Pesquisar usuário"
      onChange={e => getUser(e.target.value)}
    />
    <button className="searchBtn" onClick={btnAction}>
        Ir para o perfil
    </button>

    <p className="errorText">{error}</p>
  </div>
);

export default InitialForm;