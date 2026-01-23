import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
// GSAP Summarize ------------> "use client" use it in useGsap(()=>{},[])
/*
to make infity loop animation with GSAP
1. use gsap.to() or gsap.fromTo() to create the animation
2. set the repeat property to -1 for infinite looping
3. optionally, use yoyo: true for back-and-forth animation
4. adjust duration, ease, and other properties as needed

to make a time interval between each loop
1. use the repeatDelay property to set a delay between each repeat cycle
2. set repeatDelay to the desired time in seconds

to make a time interval between each animation for diffrent elements
1. use the stagger property in the gsap.to() or gsap.fromTo() method
2. set stagger to the desired time interval in seconds

*/

/*
---------------Stagger-----------------
stagger:{

each : 0.2 // time interval between each animation

or
amount: 1 // total time for all animations

or
from: "start" // "start", "end", "center", or an index number or edgets

}
or axis: "x" // "x" or "y" for directional staggering
---------------Stagger-----------------
Example:
gsap.to(".box", {
  x: 100,
    stagger: {
        each: 0.2,
        from: "center"
        axis: "y"
    },
  duration: 1
});


when you use any property in stagger you can't use delay property
when you use any property in stagger you define this property for each element and 
he will ignore delay property and will be isolated element witiout ralation with other elements

*/
/*
---------------EASE----------
1️⃣ Power Eases

أبسط وأشهر نوع.

الأرقام تحدد قوة الانحناء: power1, power2, power3, power4.

Ease	وصف
power1.in	تبدأ الحركة ببطء ثم تتسارع
power1.out	تبدأ بسرعة ثم تبطئ تدريجيًا
power1.inOut	تبدأ ببطء → تسارع في المنتصف → تبطئ عند النهاية
power2, power3, power4	نفس المفهوم لكن مع انحناءات أقوى

power4.inOut	أقوى انحناء، حركة درامية جدًا
2️⃣ Elastic Eases
تحاكي حركة نابض أو مطاطي.

Ease	وصف
elastic.in	تبدأ الحركة ببطء، ثم تتسارع مع تأثير نابض
elastic.out	تبدأ بسرعة، ثم تبطئ مع تأثير نابض
elastic.inOut	تبدأ ببطء → تسارع → تبطئ مع تأثير نابض في النهاية
3️⃣ Bounce Eases
تحاكي حركة ارتداد الكرة.

*/
/*
------------------ Timeline Callbacks ------------------

تقدر تستخدم Callbacks (أحداث) جوا أي Tween أو جوا الـ Timeline نفسه.

-----------------------------------------------
1) Callbacks على مستوى الـ Tween:

tl.to(".box1", {
  x: 100,
  duration: 1,
  onStart: () => console.log("Box1 started ✅"),
  onComplete: () => console.log("Box1 done 🎉")
});

-----------------------------------------------
2) Callbacks على مستوى الـ Timeline كله:

const tl = gsap.timeline({
  onStart: () => console.log("Timeline Started 🚀"),
  onComplete: () => console.log("Timeline Finished 🎬"),
  onRepeat: () => console.log("Timeline Repeated 🔁"),
});

-----------------------------------------------
3) دمج كل شيء معًا:

const tl = gsap.timeline({
  repeat: 1,
  yoyo: true,
  defaults: { duration: 1 },
  onStart: () => console.log("Timeline Started ✅"),
  onComplete: () => console.log("Timeline Finished ✅")
});

tl.to(".box1", {
  x: 150,
  onStart: () => console.log("box1 is moving..."),
  onComplete: () => console.log("box1 finished ✅")
})
.to(".box2", {
  y: 100,
  duration: 2,
  onStart: () => console.log("box2 started 🟢"),
  onComplete: () => console.log("box2 done 🟢")
})
.to(".box3", {
  opacity: 0.3,
  onStart: () => console.log("box3 started 🔵"),
  onComplete: () => console.log("box3 done 🔵")
}, "-=0.5");

-----------------------------------------------
ملاحظة ✨
ممكن تستخدم:
- onStart
- onComplete
- onUpdate
- onRepeat
- onReverseComplete

على مستوى:
1) كل Tween
2) أو على مستوى الـ Timeline كله
-----------------------------------------------
*/

/*
gsap.to(".box", {
  x: 200,
  duration: 1.5,
  onStart: () => console.log("Animation Started 🎬"),
  onComplete: () => console.log("Animation Completed ✅")
});

*/
/*
------------------ GSDevTools ------------------

GSDevTools = أداة لعرض شريط تحكم للـ Timeline أثناء التطوير فقط.
تخليك تشغّل / توقف / تسرّع / تبطّئ / ترجع للخلف / تمشي Frame-by-Frame.

⚠️ متوفر فقط في العضوية المدفوعة (Club Greensock)
❌ لا يُستخدم في الإنتاج | فقط أثناء التطوير.

-----------------------------------------------
استخدام:

import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
gsap.registerPlugin(GSDevTools);

const tl = gsap.timeline();
tl.to(".box1", { x: 100 })
  .to(".box2", { y: 50 });

GSDevTools.create({ animation: tl });

-----------------------------------------------

فائدته:
✅ تشوف ترتيب الحركات بصريًا  
✅ تظبط الـ timing بدقة  
✅ تشوف الأخطاء بسهولة  
✅ تتحكم في السرعة و الوقت  
-----------------------------------------------
*/
/*
------------------ FOUC ------------------

FOUC = Flash Of Unstyled Content
معناه: "وميض محتوى بدون تنسيق"

بيحصل لما الصفحة تظهر للعَين قبل ما الـ CSS يشتغل.
فتشوف الكلام/العناصر لحظة صغيرة من غير Style → ثم يتركب الـ Style بعدها.

-----------------------------------------------
أسباب حدوث FOUC:
1) تحميل الـ CSS ببطء أو بشكل منفصل
2) استخدام Fonts خارجية بدون preloading
3) تطبيق ستايل بـ JS بعد ما الصفحة تحمل (زي GSAP, Framer Motion)
4) تنفيذ الأنيميشن قبل ما العناصر تبقى جاهزة

-----------------------------------------------
طرق حل المشكلة في Next.js:

1) Preload للخطوط:
- استخدام نظام الخطوط الجديد (next/font) بدل Google Fonts link

import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"] });
export default function Page() {
  return <div className={poppins.className}>Hello</div>;
}

✅ يضمن تحميل الخط قبل رسم الصفحة → يمنع FOUC تمامًا.

-----------------------------------------------
2) تأكد إن CSS أساسي ومش متأخر:
- عدم استدعاء CSS ملفات خارجية من داخل components
- الأفضل وضعها في globals.css أو layout.js

-----------------------------------------------
3) استخدام GSAP و Animations بعد mount:
- لف الأنيميشن داخل useEffect أو useGSAP:

useEffect(() => {
  gsap.to(".box", { x: 100 });
}, []);

✅ يمنع الأنيميشن أنه يبدأ قبل تحميل الصفحة.

-----------------------------------------------
4) إخفاء الصفحة لحد ما تُجهّز:
(يُستخدم فقط لو لسه في فلاش بسيط)

CSS:
body { opacity: 0; transition: opacity .2s ease; }

JS:
useEffect(() => {
  document.body.style.opacity = 1;
}, []);

-----------------------------------------------
خلاصة قصيرة:

FOUC = الصفحة بتظهر بدون CSS لحظة
الحل في Next.js = حمّل الخطوط والستايل بدري + ابدأ الأنيميشن بعد render

أفضل حل مباشر:
✅ استخدم next/font للخطوط
✅ نفّذ GSAP داخل useEffect أو useGSAP
✅ خلي CSS أساسي مش lazy

-----------------------------------------------
*/
/*
---------------MATCH MEDIA-----------------

فكرة عامة:
matchMedia بتخليك تعمل أنيميشن حسب حجم الشاشة
وبمجرد ما الشاشة تتغير → GSAP بيرجع كل حاجة تلقائيًا (Cleanup)
من غير ما نكتب ولا سطر إضافي.

-------------------------------------------------
الصيغة المختصرة باستخدام Conditions (الأفضل والأوضح):

mm.add({
  isMobile: "(max-width: 799px)",
  isDesktop: "(min-width: 800px)",
}, (context) => {
  // context.conditions بترجع Boolean لكل شرط
  let { isMobile, isDesktop } = context.conditions;

  if(isMobile){
    console.log("Mobile screen");
    gsap.from("h1", {
      y: -45,
      z: -200,
      duration: 1,
      ease: "elastic",
      stagger: {
        each: 0.2,
        from: "center"
      }
    });
  }

  if(isDesktop){
    console.log("Desktop screen");
    gsap.from("h1", {
      scale: 2,
      z: 200,
      duration: 1,
      ease: "elastic",
      stagger: {
        each: 0.2,
        from: "center"
      }
    });
  }
});

-------------------------------------------------
🧹 CLEAN UP (مهم جدًا!)
أي أنيميشن بيتعمل جوا matchMedia → بيتشال تلقائي لما الشرط يتلغي.
مش محتاج تعمل:
- kill()
- clear()
- removeEventListener
GSAP بيمسح الـ timeline وبيفك كل الأنيميشن لو شاشة الهاتف → بقت Desktop أو العكس.

-------------------------------------------------
ليه ده مهم؟ 
✅ مفيش Memory Leaks
✅ الأنيميشن مبيحصلش مرتين
✅ الكود أنضف وأبسط
✅ مثالي لواجهات Responsive متحركة

-------------------------------------------------
ملخص سريع:
- mm.add() → بيراقب حجم الشاشة
- conditions → بتحدد أي سطر يشتغل
- cleanup → أوتوماتيكي بالكامل، ولا سطر زيادة
const mm = gsap.matchMedia(Element);

ده معناه إن الـ matchMedia ده هيتطبق بس على عناصر جواه الـ scope ده.
*/

//////////////////////////////////////////////
const timeLine = gsap.timeline({
  repeat: -1,
  yoyo: true,
});

// here the propery in the {} is public settin for alls elements

timeLine.to("#red", {
  x: 200,
  ease: "bounce.out",
  // repeat:1,
  yoyo: true,
  borderRadius: "100%",
  color: "black",
  duration: 1,
});

timeLine.fromTo(
  "#blue",
  {
    opacity: 0,
    backgroundColor: "white",
  },
  {
    backgroundColor: "black",
    borderRadius: "100%",
    x: 200,
    opacity: 1,
    yoyo: true,
    ease: "back",
    duration: 4,
    repeat: -1,
  }
);
// or use in this way
timeLine.to (".blue",{
  //your properies
}).from ("#black",{
  // your properties 
})

// notice the benefit of the time line is to turn on each animation after the previous one if you dont add position parametrs 
.from ("#black",{
  // your properties 
},"+=1")
// Create a timeline with repeat and yoyo
;

// -----------------------------
// 1️⃣ Default chaining
// Each tween starts after the previous one finishes (no position parameter)
timeLine.to(".blue", {
  x: 100,
  opacity: 1,
  duration: 1
})
.from("#black", {
  y: -50,
  opacity: 0,
  duration: 1
});
// ✅ Benefit: simple, automatic sequencing, each animation follows the previous

// -----------------------------
// 2️⃣ Relative offset +
// Starts after the previous tween finishes + some extra time
timeLine.to(".green", {
  scale: 1.2,
  duration: 1
}, "+=0.5"); // starts 0.5 seconds after previous tween ends

// -----------------------------
// 3️⃣ Relative offset -
// Starts before the previous tween ends by some time (overlap)
timeLine.to(".yellow", {
  rotation: 180,
  duration: 1
}, "-=0.3"); // starts 0.3 seconds before the previous tween ends

// -----------------------------
// 4️⃣ Label → naming a position in the timeline
// addLabel(name, position) → gives a name and a specific time
timeLine.addLabel("startHere", 2); // label named "startHere" at 2 seconds from timeline start

// Use the label as a start position for a tween
timeLine.to(".purple", {
  x: 150,
  duration: 1
}, "startHere"); // starts exactly at "startHere"

// -----------------------------
// 5️⃣ Label + offset → label + extra time
timeLine.from(".orange", {
  y: 100,
  opacity: 0,
  duration: 1
}, "startHere+=0.5"); // starts 0.5 seconds after "startHere"

timeLine.to(".red", {
  x: -50,
  rotation: 90,
  duration: 1
}, "startHere-=0.5"); // starts 0.5 seconds before "startHere"

// -----------------------------
// 💡 Notes:
// - chaining without position parameter → automatic sequencing
// - "+=n" → after n seconds from previous tween end
// - "-=n" → before n seconds from previous tween end
// - label → reference point in timeline for tweens
// - label + offset → tweak tween start relative to the label
/*
Explaining "startHere"

"startHere" is just a named position inside the timeline.

When you pass it to a tween, it will start from that point instead of waiting for the previous tween to finish.

You can also adjust it with offsets like "startHere+=0.5" or "startHere-=0.3".

If you want, I can also make a visual diagram of this timeline showing all tweens, labels, and offsets so you can see exactly how each tween lines up.

Do you want me to make that?
*/

//--------------The Method in time line -----------
/*
-Pause
-Play 
-reverse
-restart
-eventCallback
-add
-addLabel
-totalTime
-progress
-timeScale
-time
-seek





*/

// Create a timeline
const tl = gsap.timeline({ repeat: -1, yoyo: true });

// -----------------------------
// 1️⃣ .seek(timeOrLabel)
// Move the playhead to a specific time or label without playing automatically
tl.seek(2);           // jump to 2 seconds in the timeline
tl.seek("startHere"); // jump to label named "startHere"

// -----------------------------
// 2️⃣ .time(time)
// Get or set the current time of the timeline
console.log(tl.time()); // get current time
tl.time(1.5);           // set timeline to 1.5 seconds

// -----------------------------
// 3️⃣ .timeScale(scale)
// Speed up or slow down the timeline
tl.timeScale(2);   // 2x faster
tl.timeScale(0.5); // half speed

// -----------------------------
// 4️⃣ .progress(value)
// Get or set timeline progress (0 = start, 1 = end)
console.log(tl.progress());  // get progress
tl.progress(0.5);            // jump to middle of timeline

// -----------------------------
// 5️⃣ .totalTime(value)
// Get or set total timeline time including repeats
console.log(tl.totalTime()); // get total time
tl.totalTime(5);             // jump to 5s including repeats

// -----------------------------
// 6️⃣ .addLabel(name, position)
// Add a named position to reference later
tl.addLabel("startHere", 2);
tl.to(".box", { x: 100 }, "startHere"); 

// Label with offset
tl.from(".box2", { y: 100, opacity: 0 }, "startHere+=0.5");

// -----------------------------
// 7️⃣ .add(tweenOrCallback, position)
// Add a tween or callback at a specific position
tl.add(gsap.to(".box3", { rotation: 360 }), "+=1");
tl.add(() => console.log("Reached here"), "startHere");

// -----------------------------
// 8️⃣ .eventCallback(event, function)
// Attach callbacks like onComplete, onStart, onUpdate
tl.eventCallback("onComplete", () => console.log("Timeline finished"));
tl.eventCallback("onUpdate", () => console.log("Timeline updated"));

// إنشاء Timeline
const tl2 = gsap.timeline({ repeat: -1, yoyo: true });

// -----------------------------
// 1️⃣ .seek(timeOrLabel)
// تحريك playhead لوقت معين أو label بدون التشغيل تلقائيًا
tl2.seek(2);           // الانتقال للثانية 2 في الـ timeline
tl2.seek("startHere"); // الانتقال للـ label المسمى "startHere"

// -----------------------------
// 2️⃣ .time(time)
// الحصول أو تعيين الوقت الحالي للـ timeline
console.log(tl2.time()); // الحصول على الوقت الحالي
tl2.time(1.5);           // تعيين الـ timeline عند الثانية 1.5

// -----------------------------
// 3️⃣ .timeScale(scale)
// تسريع أو تبطيء الـ timeline
tl2.timeScale(2);   // أسرع مرتين
tl2.timeScale(0.5); // نصف السرعة

// -----------------------------
// 4️⃣ .progress(value)
// الحصول أو تعيين نسبة تقدم الـ timeline (0 = البداية, 1 = النهاية)
console.log(tl2.progress());  // الحصول على التقدم الحالي
tl2.progress(0.5);            // الانتقال لنصف الـ timeline

// -----------------------------
// 5️⃣ .totalTime(value)
// الحصول أو تعيين الوقت الكلي للـ timeline بما في ذلك التكرارات
console.log(tl2.totalTime()); // الحصول على الوقت الكلي
tl2.totalTime(5);             // الانتقال للثانية 5 بما في ذلك التكرارات

// -----------------------------
// 6️⃣ .addLabel(name, position)
// إضافة موقع باسم معين للرجوع إليه لاحقًا
tl2.addLabel("startHere", 2);
tl2.to(".box", { x: 100 }, "startHere"); 

// Label مع offset
tl2.from(".box2", { y: 100, opacity: 0 }, "startHere+=0.5");

// -----------------------------
// 7️⃣ .add(tweenOrCallback, position)
// إضافة tween أو callback في موقع محدد
tl2.add(gsap.to(".box3", { rotation: 360 }), "+=1");
tl2.add(() => console.log("وصلنا هنا"), "startHere");

// -----------------------------
// 8️⃣ .eventCallback(event, function)
// ربط callback للأحداث مثل onComplete, onStart, onUpdate
tl2.eventCallback("onComplete", () => console.log("انتهى الـ timeline"));
tl2.eventCallback("onUpdate", () => console.log("تم تحديث الـ timeline"));

//----------------------------------------------//
// stagger 
/*
stagger is a usefull tool to define time between the animation of the many element if you detect many element 

stagger : 0.1 

or 
stagger : {

each : 0.2 // time interval between each animation

or
amount: 1 // total time for all animations

or
from: "start" // "start", "end", "center", or an index number or edgets

grid : [sum of row, sum of columns],
axis: 

}


*/

//------------------Scroll Trigger Plugin----------------------//
/*
1- import ScrollTrigger
2- gsap.registerPlugin(ScrollTrigger) 
3-usescrollTrigger 


scrollTrigger:{
 trigger:"theContaier || the div " Notice it is important to define stigger to another element in gsap.from("el")
 start: ,
 end :  , 
 markers : [true or false],
 scrub : [true or false], Connec the progress of the animation with the scroll here is recommended not use ease , duration


 
}  

✅ إمتى يحصل الـ Jump ؟
Pin
يحصل لما:

العنصر مالهوش ارتفاع ثابت.

أو التصميم ضيق ومفيش مساحة كفاية.

أو انت مثبت عنصر تاني غير الـ trigger (يعني pin: "#box" بدل pin: true)

some function will help you in scroll trigger 

-OnEnter
-onLeave
-onEnterBack
-onLeaveBack

----------- Toggle Actions And Some properties
toggleAction : (what will happen in Enter ) (what will happen on Leave ) (what will happen in EnterBack ) (what will happen in LeaveBack ) 
*/
/*
Notice

-scrub:(the number of seconed will be delay between the react of element and scroll)
-once:ture -- mean it will played onece then gsap will kill it 
-toggleClass: ClassName add this class when play animation
--toggleClass:{
  target:"the element will have the ClassName",
  calssName:"the class",
  
}--Notice add this class when the animation is played
-markers:

-fastScrollEnd : true --- when scroll fast stop the animation

gsap.utils.toArray("the Elements") collect the elements in array 

xPercent : it is property to move element by his width in horizontal way
خاصية xPercent في مكتبة GSAP (GreenSock Animation Platform) هي خاصية خاصة ومفيدة جدًا لتحريك العناصر أفقيًا بطريقة تستجيب لحجم العنصر نفسه، وهي تختلف عن استخدام الخاصية x العادية التي تعتمد على وحدات البكسل (px).💡 شرح خاصية xPercentتُستخدم الخاصية xPercent لتحديد نسبة مئوية لترجمة العنصر (تحريكه أفقيًا) بالاعتماد على عرضه الخاص.الوظيفة الأساسيةالمرجع هو العنصر نفسه: عند تعيين قيمة لـ xPercent: 100، فهذا يعني أنك تريد تحريك العنصر أفقيًا بمقدار $100\%$ من عرضه الكلي.الاستجابة التلقائية (Responsive): تعتبر هذه الخاصية مثالية للرسوم المتحركة المتجاوبة (Responsive Animations). فإذا تغير عرض العنصر الأصلي (بسبب تغير حجم الشاشة مثلاً)، فإن مسافة الحركة تتغير تلقائيًا لتحافظ على النسبة المئوية.دمج التحويلات (Transforms): تسمح لك xPercent بدمج التحريك القائم على النسبة المئوية مع التحريك القائم على البكسل (x). تقوم GSAP بذلك عن طريق الجمع بين خاصيتي التحويل (transform) في CSS وهما: translateX() و translate().أمثلة شائعةالقيمةالتأثيرالوصفxPercent: 100يتحرك العنصر نحو اليمينبمقدار عرضه الكامل.xPercent: -100يتحرك العنصر نحو اليساربمقدار عرضه الكامل.xPercent: -50توسيط أفقي (Horizontal Centering)تحريك العنصر نصف عرضه نحو اليسار، وهذا هو الأسلوب الأكثر كفاءة لتوسيط عنصر ديناميكيًا (بالتزامن مع left: 50%).الفرق بين x و xPercentالخاصيةالوحدة الافتراضيةمرجع الحركةمتى تستخدم؟xالبكسل (px)تحريك العنصر بعدد ثابت من البكسلات.عندما تكون مسافة الحركة محددة ولا تتغير مع حجم العنصر.xPercentنسبة مئوية (%)تحريك العنصر بنسبة من عرضه الخاص.لتحريك العناصر خارج الإطار (off-screen) أو لتوسيطها ديناميكيًا.


-horizontal: true 
if true will rotate 180 deg

--containerAnimation: the Animation -like test1
that use to till gsap this animation  in the (test1) 
*/

function GSAP() {
  useGSAP(()=>{

    gsap.registerPlugin(ScrollTrigger)

    gsap.from(".box",{
      x:100,
      scrollTrigger:{
      trigger:".container",
      start:"top bottom", // that mean the top of .container the bottom of viewport
      markers : true , // that shows the border of the animation i maen scroll animation effcet
      end : "+=100px",
      scrub:true, 
      pin:true/* pin the trigger element*/ || "Deteced Element"
      // when you use pin GSAP add padding
      // notice when you use pin maybe will be jub to stop it use pinSpacing: false

    }
    })
  },[])
  return (
    <div>GSAP</div>
  )
}

export {GSAP}

// Clean UP useGsap make it automatikly

// Notice you can 

// Match Media 

function MatchMedia () {
  useGSAP(()=>{
    const mm = matchMedia()
    mm.add({
      isMobile:"max-width:(786px)",
      isComputer:"min-width:(787px)"
    },(context)=>{
        console.log(context)
      gsap.from(".box",{
        onStart:console.log("Iam Here"),
        x:200,
        opacity:0,
        rotation:1,
      })
    })
  },[])
}

// ----------------------------------------------//
//--------------Scroll Trigger Plugin----------------------//
/*
1- import ScrollTrigger
2- gsap.registerPlugin(ScrollTrigger) 
3-usescrollTrigger
scrollTrigger:{
 trigger:"theContaier || the div " Notice it is important to define stigger to another element in gsap.from("el")
  start: ,
  end :  ,
  markers : [true or false],
  scrub : [true or false], Connec the progress of the animation with the scroll here is recommended not use ease , duration
}

✅ إمتى يحصل الـ Jump ؟
Pin
يحصل لما:
العنصر مالهوش ارتفاع ثابت.
أو التصميم ضيق ومفيش مساحة كفاية.
أو انت مثبت عنصر تاني غير الـ trigger (يعني pin: "#box" بدل pin: true)
some function will help you in scroll trigger
-OnEnter
-onLeave
-onEnterBack
-onLeaveBack
----------- Toggle Actions And Some properties
toggleAction : (what will happen in Enter ) (what will happen on Leave ) (what will happen in EnterBack ) (what will happen in LeaveBack )
*/
/*
Notice
-scrub:(the number of seconed will be delay between the react of element and scroll)
-once:ture -- mean it will played onece then gsap will kill it
-toggleClass: ClassName add this class when play animation
--toggleClass:{
  target:"the element will have the ClassName",
  calssName:"the class",
  }--Notice add this class when the animation is played
-markers:
-fastScrollEnd : true --- when scroll fast stop the animation
gsap.utils.toArray("the Elements") collect the elements in array
*/

/*
Notice you have another way to use scroll trigger 

ScrollTrigger.create({

/// the most important property ---> animation: your animation
  trigger:".container",
  start:"top bottom", // that mean the top of .container the bottom of viewport
  markers : true , // that shows the border of the animation i maen scroll animation effcet
  end : "+=100px",
  scrub:true,
  {// your another properies}
})
*/

/*
Toggle Actions Explained:
"play pause resume reverse restart none"
toggleActions: "(onEnter) (onLeave) (onEnterBack) (onLeaveBack)"

1. play: لما العنصر يدخل في منطقة التفعيل (onEnter)
2. pause: لما العنصر يخرج من منطقة التفعيل (onLeave)
3. resume: لما العنصر يرجع لمنطقة التفعيل من الخلف (onEnterBack)
4. reverse: لما العنصر يخرج من منطقة التفعيل من الخلف (onLeaveBack)
مثال عملي:
scrollTrigger: {
  trigger: ".box",
  start: "top center",
  end: "bottom center",
  toggleActions: "play pause resume reverse"
}
  

*/
/*
toggle Class Explained:
toggleClass: {
  target: "the element will have the ClassName",
  className: "the class",
}

*/
/*Notice

Fast Scroll End: true --- when scroll fast stop the animation

When you set fastScrollEnd: true in your ScrollTrigger configuration, it helps to immediately complete the animation if the user scrolls quickly to the end of the trigger area. This is particularly useful for long scrolls where you want the animation to finish smoothly without lingering in an incomplete state.

*/

/*
Notice if you want to make horizontal scroll with scroll trigger you have to use containerAnimation property in scroll trigger and define the animation that you want to use in horizontal scroll
Example:
const horizontalScroll = gsap.to(".herozontal", {
  x: () => -(herozontal.current.scrollWidth - herozontal.current.offsetWidth),
  ease: "none",
  horizontal: true,
  scrollTrigger: {
    trigger: herozontal.current,
    start: "top top",
    scrub: true,
    pin: true,
    containerAnimation: horizontalScroll, // Define the container animation here ---> you use it when you want to make an animation on horizontal scroll and you want to tell gsap that this animation will be used in horizontal scroll so animate it when it in the viewport
    markers: true,
  }
});

*/

/*
SC


*/