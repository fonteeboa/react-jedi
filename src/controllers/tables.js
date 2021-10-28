import TablePlanet from './tablePlanet';
import TableFilms from './tableFilms';

export default ({key, title, items, selectTable}) => {
    return (
        <>
        {selectTable === 'films' && selectTable === title && <TableFilms key={key} title={title} items={items} />}
        {selectTable === 'planets' && selectTable === title && <TablePlanet key={key} title={title} items={items} />}
        </>
        
    )
}