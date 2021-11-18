import React, { useState } from 'react';

export const [commande, setCommande] = useState([
    { 
        id: 1,
        title: 'BIG CHIKEN',
        hour: '2h',
        qte: '5',
        place: 'Tanambao Fianarantsoa',
        imgUrl: require('../../assets/images/humburgeur.jpg'),
    },
    { 
        id: 2,
        title: 'Hot Sandwitch',
        hour: '5h',
        qte: '10',
        place: 'Anjoma Fianarantsoa',
        imgUrl: require('../../assets/images/sandwitch.jpg'),
    },
    { 
        id: 3,
        title: 'The Meals',
        hour: '1h',
        qte: '1',
        place: 'Ampasambazaha Fianarantsoa',
        imgUrl: require('../../assets/images/plat.jpg'),
    },
]);