import React from 'react'
import './knowmorestyle.css';
import sfim from './sfim.jpg';
import nwpim from './nwpim.jpg';

function Knowmore() {
    return (
        <div className="Know-more-page">
            <div className="knowmore-info-container">
            <h1 className="knowmore-info-container-heading">SPRING FEST</h1>
            <div className="knowmore-flexbox">
                <div className="knowmore-info-container-image">
                    <img src={sfim} alt="Springfest"/>
                </div>
                <div className="knowmore-info-container-text">
                    <p className="knowmore-info-container-description">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                     by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of 
                     Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum 
                     generators on the Internet tend to repeat predefined chunks as necessary, maki
                    </p>
                </div>
            </div>
            </div>
            <div className="knowmore-info-container">
            <h1 className="knowmore-info-container-heading">NATIONWIDE PRELIMS,SPRING FEST</h1>
            <div className="knowmore-flexbox">
                <div className="knowmore-info-container-image">
                <img src={nwpim} alt="NWP"/>
                </div>
                <div className="knowmore-info-container-text">
                    <p className="knowmore-info-container-description">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered<br/> alteration in some form,
                     by injected humour, or randomised words which don't look<br/> even slightly believable. If you are going to use a passage of 
                     Lorem Ipsum, you need to be <br/>sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum 
                     generators on the<br/> Internet tend to repeat predefined chunks as necessary, making this the first true generator on the 
                     Internet. It<br/> uses a dictionary of over 200 Latin words, combined with a handful of model sentence<br/> structures, to generate 
                     Lorem Ipsum which looks reasonable.
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Knowmore
