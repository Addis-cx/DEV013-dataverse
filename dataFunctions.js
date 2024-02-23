export const filterGenders = (data, filterBy, value) => {
  const filter = data.filter((movie) => movie.facts[filterBy].includes(value));
  return filter;
};

export const sortFilms = (data, sortBy, sortOrder) => {
  data.sort((a, b) => {
    const movieA = a[sortBy].toLowerCase();
    const movieB = b[sortBy].toLowerCase();

    if (sortOrder === "asc") {
      return movieA.localeCompare(movieB);
    } else if (sortOrder === "desc") {
      return movieB.localeCompare(movieA);
    }
  });
  return data;
};

export const computeStats = (data) => {
  const movies = data.flatMap((movie) => movie.facts.genders.split(", "));
  const stats = movies.reduce((acc, genreFil) => {
    genreFil = genreFil.trim();
    acc[genreFil] += 1;
    return acc;
  }, {
    "Acción": 0,
    "Romance": 0,
    "Fantasía": 0,
    "Ciencia Ficción": 0,
    "Terror": 0,
    "Bélico": 0,
    "Suspenso": 0,
    "Infantil": 0,
    "Familia": 0,
    "Comedia": 0,
    "Drama": 0,
    "Aventura": 0,
    "Misterio": 0,
  });
  
  const statsText = Object.entries(stats).map(([genre, count]) => `${genre}: ${count}`).join(', ')
  return statsText;
};

  
