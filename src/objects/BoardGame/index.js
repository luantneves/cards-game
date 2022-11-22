import './styles.css';
import CardGame from '../../components/CardGame';
import CardFrontBack from '../../components/CardFrontBack';
import cards from './data.js';


function BoardGame(amountCards){

    const flipAndHideCards = ($cardsActive) => {
        $cardsActive.forEach((card)=>{
            card.classList.remove('-active');
       });
    }

    const swapPlayer = ($arrowDown) => {
        const currentPlayer = $arrowDown.getAttribute('data-currentPlayer');
        $arrowDown.setAttribute('data-currentPlayer', currentPlayer == 1 ? 2 : 1);
    }

    window.boardGame = {};
    window.boardGame.handleClick = () => {
        
        const $boardGame = document.querySelector('.board-game');
        const $arrowDown = document.querySelector('.arrow-down');
        const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active');
        console.log($cardsActive);

        if($cardsActive.length === 2){
            setTimeout(()=>{
                flipAndHideCards($cardsActive);
                swapPlayer($arrowDown);
            },1000);

          
        }
    }
    const htmlCardsList = cards.map((card)=>{
        return CardFrontBack(card.icon, card.altIcon).repeat(2)
    });
   
    const $htmlCards = htmlCardsList.join('');

    return /*html*/`
    <section class='board-game' onclick="boardGame.handleClick()">
        ${$htmlCards}
        
    </section>
    `;
}

export default BoardGame;