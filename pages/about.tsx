import Image from 'next/image'

const about = () => {

    return (
        <div className="external">
            <div className="box">.asqas</div>
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
    );
}

export default about;