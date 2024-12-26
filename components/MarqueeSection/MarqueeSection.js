import React from 'react';
import MS1 from '/public/images/marquee-box.png'
import Image from 'next/image';

const MarqueeSection = (props) => {
    return (
        <div className={"" +props.hclass}>
            <div className="mycustom-marque">
                <div className="scrolling-wrap">
                    <div className="comm">
                        <div className="cmn-textslide">T-Shirts</div>
                        <div><Image src={MS1} alt="img" /></div>
                        <div className="cmn-textslide">DTF Printing</div>
                        <div><Image src={MS1} alt="img" /></div>
                        <div className="cmn-textslide color-2">Embroidery</div>
                        <div><Image src={MS1} alt="img" /></div>
                        <div className="cmn-textslide">Custom Polos</div>
                        <div><Image src={MS1} alt="img" /></div>
                        <div className="cmn-textslide">Custom Hats</div>
                        <div><Image src={MS1} alt="img" /></div>
                    </div>
                    <div className="comm">
                        <div className="cmn-textslide">T-Shirts</div>
                        <div><Image src={MS1} alt="img" /></div>
                        <div className="cmn-textslide">DTF Printing</div>
                        <div><Image src={MS1} alt="img" /></div>
                        <div className="cmn-textslide color-2">Embroidery</div>
                        <div><Image src={MS1} alt="img" /></div>
                        <div className="cmn-textslide">Custom Polos</div>
                        <div><Image src={MS1} alt="img" /></div>
                        <div className="cmn-textslide">Custom Hats</div>
                        <div><Image src={MS1} alt="img" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarqueeSection;