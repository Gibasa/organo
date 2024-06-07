import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import { v4 as uuidv4} from "uuid"

function App() {
  const [times, setTimes] = useState([
    { 
      id: uuidv4(),
      nome: "Programação",
      cor: "#D9f7E9",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#e8f8ff",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#f0f8e2",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#fde7e8",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#eae9f5",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#fff5d9",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#ffeedf",
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  function deletarColaborador(id){
      setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  const aoColaboradorAdicionado = (colaborador) => {
    // colaborador.id = uuidv4()
    setColaboradores([...colaboradores, colaborador])
  }

  function mudarCorTime(cor, id){
    setTimes(times.map(time => {
      if(time.id === id){
        time.cor = cor
      }
      return time
    }))
  }

  function cadastrarTime(novoTime){
    setTimes([...times, {...novoTime, id: uuidv4()}])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario
      cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoColaboradorAdicionado(colaborador)
        }
      />
      {times.map((time) => (
        <Time
          key={time.id}
          id={time.id}
          nome={time.nome}
          corPrimaria={time.cor}
          cor={time.cor}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorTime}
        />
      ))}
    </div>
  );
}

export default App;
