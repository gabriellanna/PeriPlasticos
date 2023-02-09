import React from "react";
import Produto from "./classProdutos";
import ImgEspPilar from "../../Assets/esppilar.jpg"
import ImgEspTorre from "../../Assets/esptorre.jpg"


const EspacadorPilar = () => {
    return (
        <Produto
            nome={'Espaçador Pilar'}
            img={ImgEspPilar}
            alt={'Imagem de um espaçador pilar'}
            nav={'/'}
        />
    );
};

const EspacadorTorre = () => {
    return (
        <Produto
            nome={'Espaçador Torre'}
            img={ImgEspTorre}
            alt={'Imagem de um espaçador torre'}
            nav={'/'} />
    );
};


export { EspacadorPilar };
export { EspacadorTorre };

/*

const Produto223 = () => {
    return (
        <Produto
            nome={''}
            img={}
            alt={''}
            nav={'/'} />
    );
};

export { Produto223 };
*/

/*

const Produto222 = () => {
    return (
        <Produto
            nome={''}
            img={}
            alt={''}
            nav={'/'} />
    );
};

export { Produto222 };
*/