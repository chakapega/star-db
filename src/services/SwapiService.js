export default class SwapiService {
  _apiBase = 'https://swapi.dev/api';

  _extractId = item => {
    const idRegExp = /\/([0-9]*)\/$/;
    const id = item.url.match(idRegExp)[1];

    return id;
  };

  _transformPerson = person => {
    const { name, gender, birth_year, eye_color } = person;

    return {
      id: this._extractId(person),
      name,
      gender,
      birthYear: birth_year,
      eyeColor: eye_color,
    };
  };

  _transformPlanet = planet => {
    const {
      id = this._extractId(planet),
      name,
      population,
      rotation_period,
      diameter,
    } = planet;

    return {
      id,
      name,
      population,
      rotationPeriod: rotation_period,
      diameter,
    };
  };

  _transformStarship = starship => {
    const {
      name,
      model,
      manufacturer,
      cost_in_credits,
      length,
      crew,
      passengers,
      cargo_capacity,
    } = starship;

    return {
      id: this._extractId(starship),
      name,
      model,
      manufacturer,
      costInCredits: cost_in_credits,
      length,
      crew,
      passengers,
      cargoCapacity: cargo_capacity,
    };
  };

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  };

  getPerson = async id => {
    const person = await this.getResource(`/people/${id}`);

    return this._transformPerson(person);
  };

  getAllPeople = async () => {
    const people = await this.getResource('/people');

    return people.results.map(this._transformPerson);
  };

  getPlanet = async id => {
    const planet = await this.getResource(`/planets/${id}`);

    return this._transformPlanet(planet);
  };

  getAllPlanets = async () => {
    const planets = await this.getResource('/planets');

    return planets.results.map(this._transformPlanet);
  };

  getStarship = async id => {
    const starship = await this.getResource(`/starships/${id}`);

    return this._transformStarship(starship);
  };

  getAllStarships = async () => {
    const starships = await this.getResource('/starships');

    return starships.results.map(this._transformStarship);
  };
}
