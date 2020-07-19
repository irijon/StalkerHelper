import Store_character from './Character/Store_character';

const Take = (slot, item) => {
    Store_character._currentValue[slot] = item;
}

export default Take;