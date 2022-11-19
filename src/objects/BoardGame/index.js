import './styles.css';
import CardGame from '../../components/CardGame';
import CardFrontBack from '../../components/CardFrontBack';
import cards from './data.js';


function BoardGame(amountCards){
    const htmlCardsList = cards.map((card)=>{
        return CardFrontBack(card.icon, card.altIcon).repeat(2)
    });
   
    const $htmlCards = htmlCardsList.join('');

    return `
    <section class='board-game'>
        ${$htmlCards}
        
    </section>
    `;
}

export default BoardGame;