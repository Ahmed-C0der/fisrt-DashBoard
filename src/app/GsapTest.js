import gsap from "gsap";
import { useEffect, useRef } from "react";
import { GSDevTools } from "gsap/GSDevTools";

export default function GsapTimelineDemo() {
  const tlRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(GSDevTools);

    // Create timeline
    const tl = gsap.timeline({ repeat: -1, yoyo: true, defaults: { duration: 1 } });
    tlRef.current = tl; // تخزين reference لاستخدامه في الأزرار

    // Add label
    tl.addLabel("startHere", 0);

    // Animate boxes
    tl.to("#red", { x: 200, borderRadius: "50%", backgroundColor: "pink", ease: "bounce.out" });
    tl.fromTo(
      "#blue",
      { opacity: 0, backgroundColor: "white" },
      { opacity: 1, x: 200, borderRadius: "50%", backgroundColor: "black", repeat: -1, yoyo: true, ease: "back.out" },
      "+=0.5"
    );
    tl.to("#green", { y: 100, rotation: 360, backgroundColor: "lime" }, "startHere+=1");
    tl.to("#yellow", { x: -150, rotation: 180, backgroundColor: "orange" }, "-=0.5");
    tl.to("#purple", { x: 150, scale: 1.5, backgroundColor: "violet" });

    // Event callbacks
    tl.eventCallback("onUpdate", () => console.log("Progress:", tl.progress().toFixed(2)));

    // GSDevTools
    GSDevTools.create({ animation: tl, show: true });
  }, []);

  // Handlers for the buttons
  const handleSeek = () => {
    tlRef.current.seek(1.5); // الانتقال للثانية 2 مباشرة
  };
  const handleTime = () => {
    tlRef.current.time(1.5); // الانتقال للثانية 1.5 من الدورة الحالية فقط
  };
  const handleTotalTime = () => {
    tlRef.current.totalTime(1.5); // الانتقال للثانية 5 بما في ذلك كل التكرارات
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center min-h-screen bg-gray-900">
      <div className="flex gap-2">
        <button onClick={handleSeek} className="px-4 py-2 bg-blue-600 text-white rounded">Seek(1.5)</button>
        <button onClick={handleTime} className="px-4 py-2 bg-green-600 text-white rounded">Time(1.5)</button>
        <button onClick={handleTotalTime} className="px-4 py-2 bg-purple-600 text-white rounded">TotalTime(1.5)</button>
      </div>

      <div id="red" className="w-20 h-20 bg-red-500 rounded-2xl"></div>
      <div id="blue" className="w-20 h-20 bg-blue-500 rounded-2xl"></div>
      <div id="green" className="w-20 h-20 bg-green-500 rounded-2xl"></div>
      <div id="yellow" className="w-20 h-20 bg-yellow-400 rounded-2xl"></div>
      <div id="purple" className="w-20 h-20 bg-purple-500 rounded-2xl"></div>
    </div>
  );
}
