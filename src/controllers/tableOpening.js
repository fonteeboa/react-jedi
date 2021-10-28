
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from "../images/carousel/star-wars.jpeg";
import image2 from "../images/carousel/star-wars-star-wars-the-rise-of-skywalker.jpeg";
import image3 from "../images/carousel/star-wars-battlefront.jpeg";
import image4 from "../images/carousel/star-wars-logo.png";
import image5 from "../images/carousel/star-wars-1.png";
import image6 from "../images/carousel/star-wars-5.jpg";
import image7 from "../images/carousel/star-wars-star-wars-battlefront-video-games.jpg";
import image8 from "../images/carousel/the-mandalorian-star-wars-baby-yoda.jpg";
import image9 from "../images/carousel/star-wars-nawpic.jpg";
export default () => {
    const data = [
        {img:image9},
        {img:image5},
        {img:image2},
        {img:image3},
        {img:image4},
        {img:image1},
        {img:image6},
        {img:image7},
        {img:image8}
    ];
    return (
        <>  
            <div>
                <h1 className="carouselCenter h2class">Star Wars Project with React</h1>
                <p className="initalPhrase">This project has the intention to learn and evolve my skills in reactjs</p>

            </div>
            <div className="carouselCenter">
                <Carousel time={2000} width="900px" height="400px" automatic={true} dots={true}>
                    {data.map((d, key)=>(              
                        <div>
                            <img className="imgcarousel" src={d.img} />
                        </div>
                    ))}
                </Carousel>
            </div>           
        </>
    );
};
