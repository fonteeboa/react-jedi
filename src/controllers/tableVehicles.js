import React from 'react';
const API_URL = 'https://swapi.dev/api/';

export default ({title, items}) => {
    
    return (
        <div className ="tableMasterArea">
            <div className="tableTitle">
                <h2 className="lead ">{title}</h2>
            </div>
            <table className="table table-striped rounded bgColorWhite shadowCustom">
                <thead>
                    <tr>
                    <th><p>class</p></th>
                    <th><p>model</p></th>
                    <th><p>name</p></th>
                    <th><p>crew</p></th>
                    <th><p>passengers</p></th>
                    <th><p>max speed</p></th>
                    <th><p>manufacturer</p></th>
                    </tr>
                </thead>
                <tbody>
                {items.length > 0 && items.map((item, key)=>(
                    <tr id={item.url.replace(API_URL + 'vehicles/','','').replace('/','','')} key={item.url.replace(API_URL + 'planets/','','').replace('/','','')}>
                        <th><p>{item.vehicle_class}</p></th>
                        <th><p>{item.model}</p></th>
                        <th><p>{item.name}</p></th>
                        <th><p>{item.crew}</p></th>
                        <th><p>{item.passengers}</p></th>
                        <th><p>{item.max_atmosphering_speed}</p></th>
                        <th><p>{item.manufacturer}</p></th>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}