import {useState} from 'react';
import "./pm.css";

//import AQI picture

// import hazadous from "";
// import veryunhealthy from "";
import unhealthy from "./Image/unhealthygoose.png";// <100
// import unhealthyforsensitivegroup from "";
// import moderate from "";// 51-100 //color #ecbd4d
// import good from ""; // 0-50


//onclickcheck
const Pm = () => {
  const [isShownAll, setIsShownAll] = useState(false);
  const showAll = event => {
    setIsShownAll(current => !current);
    setIsShownSIT(false);
    setIsShownCB(false);
    setIsShownLx(false);
  };
  //SIT onclick check
  const [isShownSIT, setIsShownSIT] = useState(false);
  const showSIT = event => {
    setIsShownSIT(current => !current);
    setIsShownAll(false);
    setIsShownCB(false);
    setIsShownLx(false);
  };
  //CB2 oncick check
  const [isShownCB, setIsShownCB] = useState(false);
  const showCB = event => {
    setIsShownCB(current => !current);
    setIsShownAll(false);
    setIsShownSIT(false);
    setIsShownLx(false);
  };
  //Lx onclick check
  const [isShownLx, setIsShownLx] = useState(false);
  const showLx = event => {
    setIsShownLx(current => !current);
    setIsShownAll(false);
    setIsShownCB(false);
    setIsShownSIT(false);
  };
  
  return (
    <div>
      <section>
        <div className="Pm">
          <div className="search">
            <div>
              <div className='btn'>
                <button className="btnAll" onClick={showAll}>All</button>
                <button className="btnSIT" onClick={showSIT}>SIT</button>
                <button className="btnCB2" onClick={showCB}>CB2</button>
                <button className="btnLx" onClick={showLx}>Lx</button>
              </div>
              {isShownSIT ? (
                <div>
                  <h3 className='buildingText'>SIT Building</h3>
                  <div className="cards">
                    <div className="card">
                      <img src={unhealthy} alt='Logo' className='logo-image' />
                      <div className="text">
                        <h3> SIT Floor 1 </h3> 
                        <div className="SIT"><h4> SIT </h4></div>
                        <h1>000</h1>
                      </div>
                    </div>
                    <div className="card">
                      <img src={unhealthy} alt='Logo' className='logo-image' />
                      <div className="text">
                        <h3> SIT Floor 2 </h3> 
                        <div className="SIT"><h4> SIT </h4></div>
                        <h1>000</h1>
                      </div>
                    </div>
                    <div className="card">
                      <img src={unhealthy} alt='Logo' className='logo-image' />
                      <div className="text">
                        <h3> SIT Floor 3 </h3> 
                        <div className="SIT"><h4> SIT </h4></div>
                        <h1>000</h1>
                      </div>
                    </div>
                    <div className="card">
                      <img src={unhealthy} alt='Logo' className='logo-image' />
                      <div className="text">
                        <h3> SIT Infra & Software Room </h3> 
                        <div className="SIT"><h4> SIT </h4></div>
                        <h1>000</h1>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              {isShownCB ? (
                <div>
                  <h3 className='buildingText'>CB2 Building</h3>
                  <div className="cards">
                    <div className="card">
                      <img src={unhealthy} alt='Logo' className='logo-image' />
                      <div className="text">
                        <h3> CB 2308 </h3> 
                        <div className="CB"><h4> CB2 </h4></div>
                        <h1>000</h1>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              {isShownLx ? (
                <div>
                  <h3 className='buildingText'>Lx Building</h3>
                  <div className="cards">
                    <div className="card">
                      <img src={unhealthy} alt='Logo' className='logo-image' />
                      <div className="text">
                        <h3> Lx-10/1 </h3> 
                        <div className="Lx"><h4> Lx </h4></div>
                        <h1>000</h1>
                      </div>
                    </div>
                    <div className="card">
                      <img src={unhealthy} alt='Logo' className='logo-image' />
                      <div className="text">
                        <h3> Lx-11/1 </h3> 
                        <div className="Lx"><h4> Lx </h4></div>
                        <h1>000</h1>
                      </div>
                    </div>
                    <div className="card">
                      <img src={unhealthy} alt='Logo' className='logo-image' />
                      <div className="text">
                        <h3> Lx-12/1 </h3> 
                        <div className="Lx"><h4> Lx </h4></div>
                        <h1>000</h1>
                      </div>
                    </div>
                    <div className="card">
                      <img src={unhealthy} alt='Logo' className='logo-image' />
                      <div className="text">
                        <h3> Lx-13/2 </h3> 
                        <div className="Lx"><h4> Lx </h4></div>
                        <h1>000</h1>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              {(!isShownCB && !isShownSIT && !isShownLx) || isShownAll ? (
                <div>
                  <h3 className='buildingText'>All Buildings</h3>
                  <div className="cards">
                    <div className="card">
                      <img src={check()} alt='Logo' className='logo-image' />
                      <div className="text">
                        <h3> SIT Floor 1 </h3> 
                        <div className="SIT"><h4> SIT </h4></div>
                        <h1>{pm()}</h1>
                      </div>
                    </div>
                    <div className="card">
                      <img src={unhealthy} alt='Logo' className='logo-image' />
                      <div className="text">
                        <h3> SIT Floor 2 </h3> 
                        <div className="SIT"><h4> SIT </h4></div>
                        <h1>000</h1>
                      </div>
                    </div>
                    <div className="card">
                      <img src={unhealthy} alt='Logo' className='logo-image' />
                      <div className="text">
                        <h3> SIT Floor 3 </h3> 
                        <div className="SIT"><h4> SIT </h4></div>
                        <h1>000</h1>
                      </div>
                    </div>
                    <div className="card">
                      <img src={unhealthy} alt='Logo' className='logo-image' />
                      <div className="text">
                        <h3> SIT Infra & Software Room </h3> 
                        <div className="SIT"><h4> SIT </h4></div>
                        <h1>000</h1>
                      </div>
                    </div>
                    <div className="card">
                      <img src={unhealthy} alt='Logo' className='logo-image' />
                      <div className="text">
                        <h3> CB 2308 </h3> 
                        <div className="CB"><h4> CB2 </h4></div>
                        <h1>000</h1>
                      </div>
                    </div>
                    <div className="card">
                      <img src={unhealthy} alt='Logo' className='logo-image' />
                      <div className="text">
                        <h3> Lx-10/1 </h3> 
                        <div className="Lx"><h4> Lx </h4></div>
                        <h1>000</h1>
                      </div>
                    </div>
                    <div className="card">
                      <img src={unhealthy} alt='Logo' className='logo-image' />
                      <div className="text">
                        <h3> Lx-11/1 </h3> 
                        <div className="Lx"><h4> Lx </h4></div>
                        <h1>000</h1>
                      </div>
                    </div>
                    <div className="card">
                      <img src={unhealthy} alt='Logo' className='logo-image' />
                      <div className="text">
                        <h3> Lx-12/1 </h3> 
                        <div className="Lx"><h4> Lx </h4></div>
                        <h1>000</h1>
                      </div>
                    </div>
                    <div className="card">
                      <img src={unhealthy} alt='Logo' className='logo-image' />
                      <div className="text">
                        <h3> Lx-13/2 </h3> 
                        <div className="Lx"><h4> Lx </h4></div>
                        <h1>000</h1>
                      </div>
                    </div>
                  </div>
                </div>
                ) : null
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

//image
function check (){
  let AQI = pm();

  if(AQI >= 251){
    // return hazadous;
  }else if(AQI >= 151){
    // return veryunhealthy;
  }else if(AQI >= 66){
    return unhealthy;
  }else if(AQI >= 41){
    // return unhealthyforsensitivegroup;
  }else if(AQI >= 16){
    // return moderate;
  }else{
    // return good;
  }
}

//pm value
function pm (){
  let inputPm = 77; //77 is test value, change it when the query finish
  let pm = inputPm;
  return pm;
}

export default Pm;