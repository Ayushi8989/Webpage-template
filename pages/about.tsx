import Image from 'next/image'
import Script from 'next/script'
const about = () => {

    return (
        <div className="vector">
            <div className="text1">Lorem Ipsum
            </div>
            <div className="boxx1"> 
            </div>
            <div className="about">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eum unde aut possimus</p>

            </div>
            <div className="text">Lorem Ipsum
            </div>
            <div className="boxx"> 
            </div>
            <div className="external">
                
                <div className="horizontal-scroll-wrapper">

                    <div className="img-wrapper slower">
                        <Image src="/a-01.png" width={510} height={297} alt='image' />
                    </div>
                    <div className="img-wrapper faster">
                        <Image src="/2.png" width={510} height={297} alt='image' />
                    </div>
                    <div className="img-wrapper slower vertical">
                        <Image src="/portrait-vector-01.png" width={510} height={297} alt='image' />
                    </div>
                    <div className="img-wrapper slower">
                        <Image src="/a-01.png" width={510} height={297} alt='image' />
                    </div>
                    <div className="img-wrapper faster1">
                        <Image src="/a-01.png" width={510} height={297} alt='image' />
                    </div>
                    <div className="img-wrapper">
                        <Image src="/a-01.png" width={510} height={297} alt='image' />
                    </div>
                </div>
            </div>


            {/* <Script id="show-banner">
             {`document.getElementById('plantome').style.backgroundColor="red"`}

            
            </Script> */}
        </div>
    );
}

export default about;