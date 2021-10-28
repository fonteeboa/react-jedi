import React, { useEffect, useState } from 'react';
import starwarsFunctions from './controllers/starwarsFunctions';
import Tables from './controllers/tables';
import Loading from './controllers/loading';
import TableOpening from './controllers/tableOpening';
import './App.css';

export default () => {
  const [planetList, setPlanetList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewSelected, setViewSelected] = useState(null);

  useEffect(()=>{
    const loadAllPlanets = async () => {
      let list = await starwarsFunctions.PlanetData();
      setPlanetList(list);
      setIsLoading(false);
    }
    loadAllPlanets();
  }, []);

  return (
    <>
      <div className="bodyBackground"> 
        <nav className="sticky">
          <ul className="socialLinksUl">
            <li className="navMenu">
              <button className="navMenuButton" onClick={() => setViewSelected(null)} ><p className="ulWord">Inicio</p></button>
            </li>
            <li className="navMenu">
              <button className="navMenuButton" onClick={() => setViewSelected('films')} ><p className="ulWord">films</p></button>
            </li>
            <li className="navMenu">
              <button className="navMenuButton" onClick={() => setViewSelected('starships')} ><p className="ulWord">starships</p></button>
            </li>
            <li className="navMenu">
              <button className="navMenuButton" onClick={() => setViewSelected('vehicles')} ><p className="ulWord">vehicles</p></button>
            </li>
            <li className="navMenu">
              <button className="navMenuButton" onClick={() => setViewSelected('planets')} ><p className="ulWord">planets</p></button>
            </li>
            <li className="navMenu">
              <button className="navMenuButton" onClick={() => setViewSelected('species')} ><p className="ulWord">species</p></button>
            </li>
            <li className="navMenu">
              <button className="navMenuButton" onClick={() => setViewSelected('people')} ><p className="ulWord">people</p></button>
            </li>
          </ul>
        </nav>
        <main id="mainBody">
          {isLoading && <Loading message={'Loading Data..'} />}
          <section className="planetList jumbotron container">
          {viewSelected === null && <TableOpening />}
          {!isLoading && viewSelected !== null && planetList.map((item, key) => (
              <Tables key={key} title={item.title} items={item.items} selectTable={viewSelected} showLoading={isLoading} />
          ))}
          </section>
        </main>
        <footer className="rounded bgColorWhite">
          <p><a className="footerIcon" href="https://github.com/galvao845" target="_blank"> <i className="bi-github" role="img" aria-label="GitHub" /> Developed by João Galvão</a></p>
        </footer>
      </div>
    </>
  );
}
