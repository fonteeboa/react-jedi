import TablePlanet from './tablePlanet';
import TableFilms from './tableFilms';
import TableStarships from './tableStarships';
import TableVehicles from './tableVehicles';
import TableSpecies from './tableSpecies';
import TablePeople from './tablePeople';

export default ({key, title, items, selectTable}) => {
    return (
        <>
        {selectTable === 'films' && selectTable === title && <TableFilms key={key} title={title} items={items} />}
        {selectTable === 'planets' && selectTable === title && <TablePlanet key={key} title={title} items={items} />}
        {selectTable === 'starships' && selectTable === title && <TableStarships key={key} title={title} items={items} />}
        {selectTable === 'vehicles' && selectTable === title && <TableVehicles key={key} title={title} items={items} />}
        {selectTable === 'species' && selectTable === title && <TableSpecies key={key} title={title} items={items} />}
        {selectTable === 'people' && selectTable === title && <TablePeople key={key} title={title} items={items} />}
        </>
        
    )
}