/**
 * Esta funcion permite obtener el valor de la carta
 * @param {String} carta valor de letras Ejemplo: ['QS','JD','KD'...]
 * @returns {Number}Retorna los valores cartas
 */
export const valorCarta = (carta) => {
  if (!carta) throw new Error('carta es obligatorio como un arreglo de string');

  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1;
};
