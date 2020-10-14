import React from 'react' 

/*component sous forme de fonction :
    Utile pour : component stateless
    Les + : + lisible, + ouvert au personne ne connaissant pas la notion de component,
    + simple à migrer*/
const Membre = () => {
    const name = 'antho'
    return(
    <h2>Membre de la famille : {name.toUpperCase}</h2>
    )
}

export default Membre