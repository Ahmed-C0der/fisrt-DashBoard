// "use client";
// import React, { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";

// function ToggleDemo() {

//   gsap.registerPlugin(ScrollTrigger);
//     const herozontal= useRef(null);

//   useGSAP(() => {
//     // gsap.from(".box", {
//     //   x: -300,
//     //   opacity: 0,
//     //   duration: 1.5,
//     //   scrollTrigger: {
//     //     trigger: ".trigger-section",
//     //     start: "top 80%",
//     //     end: "bottom 20%",
//     //     markers: true,

//     //     // ===== أهم جزء طلبته =====
//     //     toggleActions: "play reverse play reverse",
//     //     // onEnter      → play
//     //     // onLeave      → reverse
//     //     // onEnterBack  → play
//     //     // onLeaveBack  → reverse
//     //   },
//     // });
//     gsap.to(herozontal.current, {
//       x: () => -(herozontal.current.scrollWidth - herozontal.current.offsetWidth),
//       ease: "none",
//       horizontal: true,
//       scrollTrigger: {
//         trigger: herozontal.current,
//         start: "top top",
//         // end: () => `+=${herozontal.current.scrollWidth - herozontal.current.offsetWidth}`,
//         scrub: true,
//         pin: true,
//         // anticipatePin:1,
//         markers: true,
//       }
//     })
//   }, []);

//   return (
//     <>
//     {/* <div className="min-h-[200vh]">
//       <div className="trigger-section mt-[50vh] h-[300px] bg-gray-200 flex justify-center items-center">
//         <div className="box w-[150px] h-[150px] bg-blue-500"></div>
//       </div>
//     </div> */}

//     <div ref={herozontal} className="herozontal w-max h-screen flex-nowrap bg-gray-300 flex gap-4 items-center overflow-hidden">
//       <div className="boxH w-screen h-screen bg-blue-600"></div>
//       <div className="boxH w-screen h-screen bg-cyan-700"></div>
//     </div>
//     </>
//   );
// }

// export default ToggleDemo;
"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function HorizontalScrollDemo() {
  const horizontalSection = useRef(null);
  const horizontalWrapper = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = horizontalSection.current;
    const wrapper = horizontalWrapper.current;

    if (!section || !wrapper) return;

    // حساب المسافة للأفقية scrolling
    const getScrollAmount = () => {
      let wrapperWidth = wrapper.scrollWidth;
      return -(wrapperWidth - window.innerWidth);
    };

    // animation للحركة الأفقية
    const tween = gsap.to(wrapper, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        markers: true, // حط false لما تخلص testing
        invalidateOnRefresh: true
      }
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <>
      {/* First Normal Section */}
      <div className="h-screen bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-5xl font-bold mb-4">Scroll Down ↓</h1>
          <p className="text-white text-xl">To experience horizontal scroll</p>
        </div>
      </div>

      {/* Horizontal Scroll Section */}
      <section 
        ref={horizontalSection} 
        className="h-screen overflow-hidden bg-gray-900 relative"
      >
        <div 
          ref={horizontalWrapper} 
          className="flex h-screen will-change-transform"
          style={{ width: "300vw" }}
        >
          {/* Slide 1 */}
          <div className="w-screen h-full bg-linear-to-br from-blue-600 to-blue-800 shrink-0 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-white text-4xl font-bold mb-4">First Slide</h2>
              <p className="text-white text-lg">Horizontal scrolling with GSAP</p>
            </div>
          </div>
          
          {/* Slide 2 */}
          <div className="w-screen h-full bg-linear-to-br from-purple-600 to-purple-800 flex-shrink-0 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-white text-4xl font-bold mb-4">Second Slide</h2>
              <p className="text-white text-lg">Smooth scroll experience</p>
            </div>
          </div>
          
          {/* Slide 3 */}
          <div className="w-screen h-full bg-gradient-to-br from-green-600 to-green-800 flex-shrink-0 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-white text-4xl font-bold mb-4">Third Slide</h2>
              <p className="text-white text-lg">Powered by GSAP ScrollTrigger</p>
            </div>
          </div>
        </div>
      </section>

      {/* Last Normal Section */}
      <div className="h-screen bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-5xl font-bold mb-4">The End ↑</h1>
          <p className="text-white text-xl">Amazing horizontal scroll, right?</p>
        </div>
      </div>
    </>
  );
}

export default HorizontalScrollDemo;
