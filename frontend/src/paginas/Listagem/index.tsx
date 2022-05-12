/*importando a imagem*/
import Avaliacao_Filme from "componentes/Avaliaçao_Filme";
import Card_filme from "componentes/Card_Filme";
/*import Estrelas from "componentes/Estrelas"; */
import Paginacao from "componentes/Paginacao";

function Listagem() {
    return (
        <>
            <Paginacao />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <Card_filme />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <Card_filme />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <Card_filme />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <Card_filme />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <Card_filme />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <Card_filme />
                    </div>


                </div>
            </div>
        </>
    )
}

export default Listagem;