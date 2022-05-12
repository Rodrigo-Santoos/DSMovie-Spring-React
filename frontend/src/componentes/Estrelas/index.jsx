import {ReactComponent as StarFull} from 'assets/img/StarCheio.svg';
import {ReactComponent as StarHalf} from 'assets/img/StarMeio.svg';
import {ReactComponent as StarEmpty} from 'assets/img/StarVazia.svg';
import './styles.css'


function Estrelas() {
    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}

export default Estrelas;