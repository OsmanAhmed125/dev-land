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
          <h2>افضل خدمة</h2>
          <p>نحن نطمح في ارض المطورين الى اقضل خدمة</p>
         
        </div>
        <div className="box time">
          <div className="img-holder"> <img src={features2}/> </div>
          <h2>الوقت</h2>
          <p>نحن نطمح في ارض المطورين ان نسلم مشاريعنا في الوقت المحدد</p>
         
        </div>
        <div className="box passion">
          <div className="img-holder"><img src={features3} /></div>
          <h2>افضل الاسعار</h2>
          <p>نحن في ارض المطورين نقدم افضل اداء وافضل سعر</p>
        
        </div>
      </div>
    </div>
     
    <div className="gallery" id="gallery">
      
      <div className="container">
        <div className="box">
          <div className="image">
            <a to='./Serves' ><img src={gallery1} /></a>
          </div>
            <p className='work-title text-center text-dart'>خدمات التصميم</p>
        </div>
        <div className="box">
          <div className="image">
           <a to='./Serves'>
           <img src={gallery2} />
           </a>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <a to='./Serves' >
            <img src={gallery3} />
            </a>
          </div>
        </div>
        <div className="box">
          <div className="image">
           <a to='./Serves'>
           <img src={gallery4} /></a>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <a to='./Serves'>
            <img src={gallery5} />
            </a>
          </div>
        </div>
        <div className="box">
          <div className="image">
           <a to='./Serves'> <img src={gallery6} /></a>
          </div>
        </div>
      </div>
    </div>
        
    
    
        </>
    )
}