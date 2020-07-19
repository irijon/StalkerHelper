import React from 'react';
import './Character.css'
import Gun from './Gun/Gun';
import Suit from './Suit/Suit';
import Artefacts from './Artefacts/Artefacts';
import Item from '../Item';

const Character = () => {
    return(
        <div className="Character">
            <div className="Character_gun">
                <Item img="Иконка_обреза" btn="character/gun_select" />
            </div>
            <div className="Character_suit">
                 <Item img="Иконка_кожаной_куртки" btn="character/suit_select" />
            </div>
            <div className="Character_artefacts">
                <div className="artefact_1">
                <Item img="Грави" btn="character/artefacts_select/1" />
                </div>
                <div className="artefact_2">
                <Item img="Кристалл" btn="character/artefacts_select/2" />
                </div>
                <div className="artefact_3">
                <Item img="Медуза" btn="character/artefacts_select/3" />
                </div>
                <div className="artefact_4">
                <Item img="Ночная_звезда" btn="character/artefacts_select/4" />
                </div>
                <div className="artefact_5">
                <Item img="Слизняк" btn="character/artefacts_select/5" />
                </div>      
            </div>     
        </div>
    );
}

export default Character;