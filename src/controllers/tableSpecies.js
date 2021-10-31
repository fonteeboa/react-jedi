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
                    <th><p>name</p></th>
                    <th><p>language</p></th>
                    <th><p>skinColors</p></th>
                    <th><p>hairColors</p></th>
                    <th><p>eyeColors</p></th>
                    <th><p>classification</p></th>
                    <th><p>designation</p></th>
                    <th><p>averageLifespan</p></th>
                    </tr>
                </thead>
                <tbody>
                {items.length > 0 && items.map((item, key)=>(
                    <tr id={item.url.replace(API_URL + 'species/','','').replace('/','','')} key={item.url.replace(API_URL + 'planets/','','').replace('/','','')}>
                        <th><p>{item.name}</p></th>
                        <th><p>{item.language}</p></th>
                        <th><p>{item.skin_colors}</p></th>
                        <th><p>{item.hair_colors}</p></th>
                        <th><p>{item.eye_colors}</p></th>
                        <th><p>{item.classification}</p></th>
                        <th><p>{item.designation}</p></th>
                        <th><p>{item.average_lifespan}</p></th>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}