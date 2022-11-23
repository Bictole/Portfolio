import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ChristmasList = () => {
  return (
    <Box>
        <h1>Liste de cadeaux</h1>
        <h2>------</h2>
        <ul>
            <li>Un parfum (déja pris trop tard !)</li>
            <li>Livre The Watcher 2, plutot pas la version poche <a href='https://livre.fnac.com/a12978611/The-Witcher-Sorceleur-Tome-2-Sorceleur-T2-L-Epee-de-la-providence-Andrzej-Sapkowski'>(celui-la par exemple)</a></li>
            <li>N'ayant pas beaucoup d'idée, je vais ajouter des éléments dans cette liste dans les jours a venir !</li>
        </ul>
    </Box>
  )
}

export default ChristmasList