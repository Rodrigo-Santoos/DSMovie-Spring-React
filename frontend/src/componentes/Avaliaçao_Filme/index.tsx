import Estrelas from "componentes/Estrelas";
import './styles.css'

function Avaliacao_Filme() {

    const ponto = 3.5
    const avali = 13

    return (
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{ponto > 0 ? ponto.toFixed(1) : '-'}</p>
            <Estrelas />
            <p className="dsmovie-score-count">{avali} avaliações</p>
        </div>
    );
}

export default Avaliacao_Filme;