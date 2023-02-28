import features1 from '../imgs/features-01.jpg' 
import features2 from '../imgs/features-02.jpg' 
import features3 from '../imgs/features-03.jpg'  
import gallery1 from '../imgs/gallery-01.png'
import gallery2 from '../imgs/gallery-02.png'
import gallery3 from '../imgs/gallery-03.jpg'
import gallery4 from '../imgs/gallery-04.png'
import gallery5 from '../imgs/gallery-05.jpg'
import gallery6 from '../imgs/gallery-06.png'
import { services } from "./Service"
export default function Serves(){
    return(
        <>
       <div className="features" id="features">
      <h1 className="main-title text-center text-dark p-3 m-5">خدماتنا</h1>
      <div className="container">
        <div className="box quality">
          <div className="img-holder"><img src={features1} />
          </div>
          <h2>Quality</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
          <a href="#">More</a>
        </div>
        <div className="box time">
          <div className="img-holder"> <img src={features2}/> </div>
          <h2>Time</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
          <a href="#">More</a>
        </div>
        <div className="box passion">
          <div className="img-holder"><img src={features3} /></div>
          <h2>Passion</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
          <a href="#">More</a>
        </div>
      </div>
    </div>
      <div className="container">
        <div className="box">
          <div className="image">
           <img src={gallery1} />
          </div>
            <p className='work-title text-center text-dart'>خدمات التصميم</p>
        </div>
        <div className="box">
          <div className="image">
         
           <img src={gallery2} />
           
          </div>
        </div>
        <div className="box">
          <div className="image">
            
            <img src={gallery3} />
            
          </div>
        </div>
        <div className="box">
          <div className="image">
          
           <img src={gallery4} />
          </div>
        </div>
        <div className="box">
          <div className="image">
            
            <img src={gallery5} />
            
          </div>
        </div>
        <div className="box">
          <div className="image">
           <img src={gallery6} />
          </div>
        </div>
      </div>
    
        </>
    )
}