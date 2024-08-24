function getEvenNumbers(array) {
  //Je verifie si array est bien un tableau
  if (!Array.isArray(array)) {
    throw new Error("Le paramètre doit être un tableau!");
  }

  //Je verifie si tous les éléments du tableau sont de type number
  if (!array.every((item) => typeof item === "number")) {
    throw new Error(
      "Le tableau doit être un tableau contenant uniquement des nombres"
    );
  }

  //Je verifie si tous les nombres du tableau sont pairs
  const evenNumbers = array.filter((number) => number % 2 === 0);

  //Je retourne le résultat
  return evenNumbers;
}
