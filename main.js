import './src/styles/elements/base.css';
import './src/styles/generic/reset.css';
import './src/styles/settings/colors.css';
import BoardGame from './src/styles/objects/BoardGame';


const $root = document.querySelector('#root');
const $htmlBoardGame = BoardGame(12);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);