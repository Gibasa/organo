import "./ListaSuspensa.css";

function ListaSuspensa(props) {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        required={props.obrigatorio}
        onChange={evento => props.aoAlterado(evento.target.value)}
        value={props.valor}
      >
        <option value={""}></option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default ListaSuspensa;
