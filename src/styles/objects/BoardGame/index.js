import './styles.css'
import CardGame from '../../../components/CardGame';

function BoardGame(amountCards){
    
    const $htmlContent = CardGame().repeat(amountCards)

    return `
    <section class='board-game'>
        ${$htmlContent}
    </section>
    `;
}

export default BoardGame;