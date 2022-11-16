import CardGame from '../../../components/CardGame';

function BoardGame(amountCards){
    
    const $htmlBoardGame = CardGame().repeat(amountCards)

    return $htmlBoardGame;
}

export default BoardGame;