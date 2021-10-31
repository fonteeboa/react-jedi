import React from 'react';
const API_URL = 'https://swapi.dev/api/';

export default ({title, items}) => {
    
    return (
        <div className ="tableMasterArea">
            <div className="tableTitle">
                <h2 className="lead ">{title}</h2>
            </div>
            <table className="table table-striped rounded bgColorCss shadowCustom">
                <thead>
                    <tr>
                    <th><p>Name</p></th>
                    <th><p>Climate</p></th>
                    <th><p>Diameter</p></th>
                    <th><p>Gravity</p></th>
                    <th><p>Population</p></th>
                    <th><p>Terrain</p></th>
                    <th><p>Orbital Period</p></th>
                    </tr>
                </thead>
                <tbody>
                {items.length > 0 && items.map((item, key)=>(
                    <tr id={item.url.replace(API_URL + 'planets/','','').replace('/','','')} key={item.url.replace(API_URL + 'planets/','','').replace('/','','')}>
                        <th><p>{item.name}</p></th>
                        <th><p>{item.climate}</p></th>
                        <th><p>{item.diameter}</p></th>
                        <th><p>{item.gravity}</p></th>
                        <th><p>{item.population}</p></th>
                        <th><p>{item.terrain}</p></th>
                        <th><p>{item.orbital_period}</p></th>
                    </tr>                 
                ))}
                </tbody>
            </table>
        </div>
    )
}