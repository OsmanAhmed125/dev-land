import { services } from "./Service"
export default function Serves(){
    return(
        <>
        <div className="features" id="features">
      <h2 className="main-title">Features</h2>
      <div className="container">
        <div className="row">
            {services.map((services, index)=>
 <div key={index} className="box quality">
 <div className="img-holder">{services.image}</div>
 <h2>{services.name}</h2>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
 <a href="#">More</a>
</div>



            )}
            </div>
       </div>
    </div>
    
        </>
    )
}