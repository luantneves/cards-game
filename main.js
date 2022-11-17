import './src/styles/elements/base.css';
import './src/styles/generic/reset.css';
import './src/styles/settings/colors.css';
import BoardGame from './src/styles/objects/BoardGame';
import PlayerName from './src/components/PlayerName';
import ScoreBoard from './src/styles/objects/ScoreBoard';


const $root = document.querySelector('#root');

//const $htmlBoardGame = BoardGame(6);
//const $htmlPlayerName = PlayerName();

$root.insertAdjacentHTML(
    
    "beforeend", 
    `   
        ${ScoreBoard()}
        ${BoardGame(6)}
    
    `
    

);
