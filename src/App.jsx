import "./App.css";

import { useState } from "react";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import { FiSend } from "react-icons/fi";

import Steps from "./components/Steps";

import ReviewForm from "./components/ReviewForm";

import Thanks from "./components/Thanks";

import UserForm from "./components/UserForm";

import { useForm } from "./hooks/UseForm";

const info = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(info);

  const forms = [
    <UserForm handleInfo={handleInfo} data={data} />,
    <ReviewForm handleInfo={handleInfo} data={data} />,
    <Thanks handleInfo={handleInfo} data={data} />,
  ];

  const { currentStep, currentComponent, changeStep, isFirst, isLast } =
    useForm(forms);

  function handleInfo(key, content) {
    setData((prevData) => {
      return { ...prevData, [key]: content };
    });
  }

  return (
    <div className="app">
      <header>
        <h2>Deixe a sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto.
        </p>
      </header>

      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirst && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}

            {!isLast ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="submit">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
