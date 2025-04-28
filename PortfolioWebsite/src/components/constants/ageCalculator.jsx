import { useState, useEffect } from "react";
///////////////////////////////////////////////////////////////////////////////////////
/// Funzione per calcolare l'età (utilizzata per mostrare l'età nella pagina "about")
///////////////////////////////////////////////////////////////////////////////////////

export const today = new Date(); // Data odierna

export const getAge = (birthYear = 2002, birthMonth = 5, birthDay = 15) => { //costruttore per calcolare l'età in base alla mia data di nascita (15 Giugno 2002)
    const birthDate = new Date(birthYear, birthMonth, birthDay); //data di nascita
    let age = today.getFullYear() - birthYear;     // calcolo dell'età 
    
    if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === 
        birthDate.getMonth() && today.getDate() < birthDate.getDate())){ 
            //se il mese corrente è minore del mese di nascita oppure se il mese corrente è uguale al mese di nascita e il giorno corrente è minore del giorno di nascita viene sottratto 1 all'età
            age--;
        }
    return age;
};