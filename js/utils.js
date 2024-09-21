// FUNÇÕES UTILITÁRIAS

export function notANumber(value) {
    return isNaN(value) || value == ""
}
/* 
-- Significa que se eu passar um valor de string, por exemplo,
ele vai falar que não é um número e a aplicação não irá funcionar se não for um número
-- No JS se colocar (""), valor vazio, ele considera um número,
por isso deve-se colocar o OU(representado por ||) == ""
*/


export function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}


/*
-- Ao trazê-las para cá, tem que fazer o EXPORT.
-- E no Script.js tem que fazer o IMPORT.
*/
