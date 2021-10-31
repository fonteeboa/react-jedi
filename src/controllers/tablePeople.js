import React from 'react';
const API_URL = 'https://swapi.dev/api/';

export default ({title, items}) => {
    
    return (
        <div className ="tableMasterArea">
            <div className="tableTitle">
                <h2 className="lead ">{title}</h2>
            </div>
            <table className="table table-striped rounded shadowCustom bgColorCss">
                <thead>
                    <tr>
                    <th><p>name</p></th>
                    <th><p>gender</p></th>
                    <th><p>birthYear</p></th>
                    <th><p>skinColors</p></th>
                    <th><p>hairColors</p></th>
                    <th><p>eyeColors</p></th>
                    <th><p>mass</p></th>
                    <th><p>height</p></th>
                    </tr>
                </thead>
                <tbody>
                {items.length > 0 && items.map((item, key)=>(
                    <tr id={item.url.replace(API_URL + 'people/','','').replace('/','','')} key={item.url.replace(API_URL + 'planets/','','').replace('/','','')}>
                        <th><p>{item.name}</p></th>
                        <th><p>{item.gender}</p></th>
                        <th><p>{ typeof item.birth_year == 'string' ? item.birth_year.replace('BBY', '') : item.birth_year}</p></th>
                        <th><p>{item.skin_color}</p></th>
                        <th><p>{item.hair_color}</p></th>
                        <th><p>{item.eye_color}</p></th>
                        <th><p>{item.mass}</p></th>
                        <th><p>{item.height}</p></th>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}