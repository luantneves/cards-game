import PlayerName from '../../components/PlayerName';
import VsPlayer from '../../components/VsPlayer';
import PlayerScore from '../../components/PlayerScore';
import "./styles.css";


export default function ScoreBoard(){
    
    return /*html*/`
        <header class="score-board">
            ${PlayerName("Player 1")}
            ${PlayerScore(1)}
            ${VsPlayer()}
            ${PlayerScore(3)}
            ${PlayerName("Player 2")}
        </header>
    `;

}