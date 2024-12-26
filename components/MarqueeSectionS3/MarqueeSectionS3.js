import React from 'react';
import Mbimg from '/public/images/marquee-box-3.png'
import Image from 'next/image';

const MarqueeSectionS3 = () => {
    return (
        <div className="marquee-section fix pt-5">
            <div className="mycustom-marque">
                <div className="scrolling-wrap">
                    <div className="comm cmn-style-2">
                        <div className="cmn-textslide">Design.</div>
                        <div className="cmn-textslide"> Brand.</div>
                        <div className="cmn-textslide color-3">Quality</div>
                        <div><Image src={Mbimg} alt="img" /></div>
                    </div>
                    <div className="comm cmn-style-2">
                        <div className="cmn-textslide">Design.</div>
                        <div className="cmn-textslide"> Brand.</div>
                        <div className="cmn-textslide color-3">Quality</div>
                        <div><Image src={Mbimg} alt="img" /></div>
                    </div>
                    <div className="comm cmn-style-2">
                        <div className="cmn-textslide">Design.</div>
                        <div className="cmn-textslide"> Brand.</div>
                        <div className="cmn-textslide color-3">Quality</div>
                        <div><Image src={Mbimg} alt="img" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarqueeSectionS3;