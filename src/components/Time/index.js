import Colaborador from "../Colaborador";
import "./Time.css";
import hexToRgba from "hex-to-rgba"
import { v4 as uuidv4} from "uuid"

const Time = (props) => {
  return props.colaboradores.length > 0 ? (
    <section
      className="time"
      style={{
        backgroundColor: hexToRgba(props.cor, 0.6),
      }}
    >
      <input value={props.cor} onChange={evento => props.mudarCor(evento.target.value, props.id)} type="color" className="input-cor" />
      <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => {
          colaborador.id = uuidv4()
          return (
            <Colaborador
              id={colaborador.id}
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corDeFundo={props.cor}
              aoDeletar={props.aoDeletar}
            />
          );
        })}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
