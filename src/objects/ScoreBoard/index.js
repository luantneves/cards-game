import PlayerName from '../../components/PlayerName';
import VsPlayer from '../../components/VsPlayer';
import "./styles.css";


export default function ScoreBoard(){
    
    return /*html*/`
        <header class="score-board">
            ${PlayerName("Player 1")}
            ${VsPlayer()}
            ${PlayerName("Player 2")}
        </header>
    `;

}