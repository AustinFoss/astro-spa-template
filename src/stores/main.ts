import { atom } from 'nanostores';

export const number = atom(0);

export const decrementNumber = () => {
    number.set(number.get() - 1)
    console.log(number.get());    
}

export const incrementNumber = () => {
    number.set(number.get() + 1) 
    console.log(number.get());
}