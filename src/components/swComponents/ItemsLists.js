import ItemList from '../itemList/ItemList';
import withData from '../hoc-helpers/withData';
import SwapiService from '../../services/SwapiService';

const swapiService = new SwapiService();
const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const PersonList = withData(ItemList, getAllPeople);

const PlanetList = withData(ItemList, getAllPlanets);

const StarshipList = withData(ItemList, getAllStarships);

export { PersonList, PlanetList, StarshipList };
