import './styles.css';

export default function ArrowDown(currentPlayer = 1){
    return /*html*/`
    
        <img src="../../images/IconArrowDown.png"
             alt="Ícone de uma seta para baixo"
             class="arrow-down"
             data-currentPlayer = "${currentPlayer}"

        />

    `;
}