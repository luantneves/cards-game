import PlayerName from '../../components/PlayerName';
import VsPlayer from '../../components/VsPlayer';
import PlayerScore from '../../components/PlayerScore';
import "./styles.css";
import ArrowDown from '../../components/ArrowDown';


export default function ScoreBoard(){
    
    return /*html*/`
        <header class="score-board">
            ${ArrowDown(1)}
            ${PlayerName("Player 1")}
            ${PlayerScore(1)}
            ${VsPlayer()}
            ${PlayerScore(3)}
            ${PlayerName("Player 2")}
        </header>
    `;

}