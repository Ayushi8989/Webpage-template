import Image from 'next/image'
import Script from 'next/script'
import $ from "jquery"

export default function Home() {

  return (
    <div id='Home'>
      <div className='homepage'>
        
      </div>
      <div className="abx">
        <p>Lorem ipsum,<br /> amet consectetur<br /></p>
      </div>

      <div className="contents">
        <p>Lorem ipsum dolor sit, amet consectetur<br /> adipisicing elit. Suscipit, iusto.</p>
      </div>
    

    </div>

      // {/* <div id='sectioN'>
      //   <div className="scene" >
      //     <div className="layer main" data-depth="1.0">
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //             <div className="more"><i className="demo-icon icon-plus"></i></div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //             <div className="more"><i className="demo-icon icon-plus"></i></div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //             <div className="more"><i className="demo-icon icon-plus"></i></div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //             <div className="more"><i className="demo-icon icon-plus"></i></div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //             <div className="more"><i className="demo-icon icon-plus"></i></div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //             <div className="more"><i className="demo-icon icon-plus"></i></div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //             <div className="more"><i className="demo-icon icon-plus"></i></div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //             <div className="more"><i className="demo-icon icon-plus"></i></div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //             <div className="more"><i className="demo-icon icon-plus"></i></div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //             <div className="more"><i className="demo-icon icon-plus"></i></div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //             <div className="more"><i className="demo-icon icon-plus"></i></div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //             <div className="more"><i className="demo-icon icon-plus"></i></div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //             <div className="more"><i className="demo-icon icon-plus"></i></div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //             <div className="more"><i className="demo-icon icon-plus"></i></div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //             <div className="more"><i className="demo-icon icon-plus"></i></div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //             <div className="more"><i className="demo-icon icon-plus"></i></div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //             <div className="more"><i className="demo-icon icon-plus"></i></div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //             <div className="more"><i className="demo-icon icon-plus"></i></div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //             <div className="more"><i className="demo-icon icon-plus"></i></div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //             <div className="more"><i className="demo-icon icon-plus"></i></div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //             <div className="more"><i className="demo-icon icon-plus"></i></div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //       <div className="col">
      //         <a href="#">
      //           <div className="hover">
      //             <div className="pad align-bottom">
      //               <h2>Project Title</h2>
      //             </div>
      //             <div className="more"><i className="demo-icon icon-plus"></i></div>
      //           </div>
      //           <div className="bg-img"> <Image src='/2.png' width={128} height={77} alt='image' /> </div>
      //         </a>
      //       </div>
      //     </div>
      //   </div>
      // </div> */}
      // {/* <Script id="show-banner">
      //   {`document.getElementById('sectioN').style.backgroundColor="red"`}
      //   {`var makeWinHeight = function(){
      //     var vh = $(window).height();
      //     var projects = vh/2;
      //     $('#scene, .layer.main').height(vh);
      //     $('#scene .col a, #scene .col').height(projects);
      //   }
      //   $(document).ready(function(){
      //     makeWinHeight();

      //   });
      //   $(window).resize(function(){
      //     makeWinHeight();
      //   });

      //   var scene = document.getElementById('scene');
      //   var parallax = new Parallax(scene);`}

      // </Script> */}

      
  )
}
