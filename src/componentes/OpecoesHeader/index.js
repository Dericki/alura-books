
import styled from 'styled-components'

const textoOpcoes = ['CATEGORIAS','FAVORITOS', 'MINHA ESTANTE']
const OpcoesContainer = styled.ul`
   display: flex;
`
const OpcoeContainer = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

function OpcoesHeader() {
    return (
        <OpcoesContainer>
          { textoOpcoes.map( (texto) => (
            <OpcoeContainer><p>{texto}</p></OpcoeContainer>
          ) ) }
        </OpcoesContainer>
    )
}

export default OpcoesHeader