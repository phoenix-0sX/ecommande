import React, { useState } from 'react';

export const [product, setProducts] = useState([
    { 
        id: 1,
        title: 'BIG CHIKEN',
        details: [
            '- vous devez recommençer une authentification par le Lien Login \n',
            '- vous devez recommençer une authentification par le Lien Login \n',
            '- vous devez recommençer une authentification par le Lien Login',
        ],
        prix: 10000,
        imgUrl: require('../../assets/images/humburgeur.jpg'),
    },
    { 
        id: 2,
        title: 'DELICIOUS PASTA', 
        details: '- qui ne sont pas encore associé dans le Front Flutter mais fonctionnent bien pour des jeux de teste \n'+
        '- vous devez recommençer une authentification par le Lien Login \n'+
        '- vous devez recommençer une authentification par le Lien Login \n',
        prix: 10000,
        imgUrl: require('../../assets/images/pasta.jpg'),
    },
    { 
        id: 3,
        title: 'COOL SNACK PEPSI', 
        details: '- Sinon aucun des testes que vous feriez ne fonctionnera pas \n'+
        '- vous devez recommençer une authentification par le Lien Login \n'+
        '- vous devez recommençer une authentification par le Lien Login \n'+
        '- vous devez recommençer une authentification par le Lien Login \n'+
        '- vous devez recommençer une authentification par le Lien Login \n',
        prix: 15000,
        imgUrl: require('../../assets/images/pepsi.jpg'),
    },
    { 
        id: 4,
        title: 'THE MEALS', 
        details: 'il est préférable de présenter les donner à passer en paramètre \n'+
        '- vous devez recommençer une authentification par le Lien Login \n',
        prix: 20000,
        imgUrl: require('../../assets/images/plat.jpg'),
    },
    { 
        id: 5,
        title: 'HOT SANDWITCH', 
        details: 'il existe 2 comptes administrateurs dans la base des données \n'+
        '- vous devez recommençer une authentification par le Lien Login \n'+
        '- vous devez recommençer une authentification par le Lien Login \n',
        prix: 25000,
        imgUrl: require('../../assets/images/sandwitch.jpg'),
    },
]);