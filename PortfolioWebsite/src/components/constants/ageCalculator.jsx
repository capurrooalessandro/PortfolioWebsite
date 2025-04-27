import { useState, useEffect } from "react";

export const today = new Date();

export const getAge = (birthYear = 2002, birthMonth = 5, birthDay = 15) => {
    const birthDate = new Date(birthYear, birthMonth, birthDay);
    let age = today.getFullYear() - birthYear;      
    
    if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === 
        birthDate.getMonth() && today.getDate() < birthDate.getDate())){
            age--;
        }
    return age;
};