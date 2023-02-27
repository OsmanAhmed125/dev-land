import gallery1 from '../imgs/gallery-01.png'
import gallery2 from '../imgs/gallery-02.png'
import gallery3 from '../imgs/gallery-03.jpg'
import gallery4 from '../imgs/gallery-04.png'
import gallery5 from '../imgs/gallery-05.jpg'
import gallery6 from '../imgs/gallery-06.png'
import homepic from '../imgs/company.jpg'
export default function Homepage() {
    return (
        <div>
            <div className="container-fluid land">
                <div className="land-img"></div>
                <div className="land-holder">
                    
                        <h1 className=" brand-name text-white active brand-name text-center p-5"
                        
                        >اهلا وسهلا بكم في ارض المطورين</h1>
                  
                   
                     
                      <div className='fashion-holder'> 
                        <div className="row p-3">
                            <div className="col-sm">
                               <div className="f-holder">
                               <img className="fa-img" src={homepic} />
                               </div>
                            </div>
                            <div className="col-sm">
                                <h2 className="text-center">رائدة في صناعة التكنولوجيا!</h2>
                                <p className='prg-home'>مرحبًا بك في شركة أرض المطورين! نحن نفخر بتقديم أفضل الخدمات في مجال التطوير التكنولوجي ونسعى دائمًا لتلبية احتياجات عملائنا بأفضل طريقة ممكنة.

في أرض المطورين، نضمن لعملائنا تجربة فريدة من نوعها ونسعى جاهدين لتحقيق أعلى مستويات الجودة في مشاريعنا. ونحن نؤمن بأن العمل الجماعي والتعاون الوثيق هما مفتاح النجاح، لذلك فإننا نعمل بكل جهدنا لضمان توفير بيئة عمل مثالية لفريقنا المتميز والملتزم.

كما نفخر بتقديم حلول مبتكرة ومخصصة لتلبية احتياجات عملائنا، ونعمل بجد لتحقيق رؤى وأحلام عملائنا. لذلك، ندعوكم للانضمام إلينا في رحلة التطوير التكنولوجي والاستفادة من خبرتنا وخدماتنا المتميزة.

شكرًا لاهتمامكم بشركة أرض المطورين، ونحن نتطلع إلى العمل معكم لتحقيق أهدافكم وتحقيق أحلامكم .</p>
                            </div>
                        </div>
                      </div>

                    
                </div>
            </div>
            <br/>
            <br/>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-sm'>
                   <h1 className='text-center'> انظر الى خدماتنا</h1>
                   
    <div className="gallery" id="gallery">
      <div className="container">
        <div className="box">
          <div className="image">
            <img decoding="async" src={gallery1} alt="" />
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img decoding="async" src={gallery2} alt="" />
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img decoding="async" src={gallery3} alt="" />
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img decoding="async" src={gallery4} alt="" />
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img decoding="async" src={gallery5} alt="" />
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img decoding="async" src={gallery6} alt="" />
          </div>
        </div>
      </div>
    </div>
    
                </div>
                    </div>
                </div>
               
        </div>
    );
}