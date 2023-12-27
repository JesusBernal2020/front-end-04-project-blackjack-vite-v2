/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck es un arreglo de string Ejemplo: ['KS','2S', '2D'...]
 * @returns {String} Retorna la carta del deck
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw new Error('No hay cartas en el deck');
  }
  const carta = deck.pop();
  return carta;
};
