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
                    <th><p>release date</p></th>
                    <th><p>title</p></th>
                    <th><p>director</p></th>
                    <th><p>producer</p></th>
                    <th><p>episode id</p></th>
                    </tr>
                </thead>
                <tbody>
                {items.length > 0 && items.map((item, key)=>(
                    <tr id={item.url.replace(API_URL + 'films/','','').replace('/','','')} key={item.url.replace(API_URL + 'planets/','','').replace('/','','')}>
                        <th><p>{item.release_date}</p></th>
                        <th><p>{item.title}</p></th>
                        <th><p>{item.director}</p></th>
                        <th><p>{item.producer}</p></th>
                        <th><p>{item.episode_id}</p></th>
                    </tr>                 
                ))}
                </tbody>
            </table>
        </div>
    )
}