'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import the router hook
import BirthdayCake from '@/app/_components/Birthday-cake';
import Lovebutton from '@/app/_components/Lovebutton';
import SplitText from '@/app/_components/SplitText';

const pickupLines = [
  "HEY MINI HAPPY BIRTHDAY TO YOU MY LOVEE 💗 ",
  "MY LADY TUJ SAA CARING OR  LOYAL WALY IS DUNIYAAA ME KOI NAHI MERE JAAAN.",
  "TERE TAREEEF ME KIA LIKHO KIA NA LIKHO ALFAZ KHATAM HO JANY HAIN BUT MA APKO DESCRIBE NA PAO GA.",
  "BS ALLAH SY YEHI DUA KY TM HEMSHAKOSH RAHOO DUNIYA JAHAN KI SARI KUSIYAN ALLAH APKO DE OR ZINDAGI KY HAR MOORH PAR APKO KAAMYAB KRE.",
  "ONES AGAIN HAPPY BIRTHDAY MERE JAAN 🎂 NOW YOU ARE 8TEEN😙❤️."
];

const Page = () => {
  const [step, setStep] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const audioRef = useRef(null);
  const router = useRouter(); // Initialize the router hook

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleNextLine = () => {
    if (lineIndex < pickupLines.length - 1) {
      setLineIndex((prevIndex) => prevIndex + 1);
    } else {
      // Redirect to "/" when all lines are finished
      router.push('/');
    }
  };

  useEffect(() => {
    if (step === 2 && audioRef.current) {
      audioRef.current.play();
    }
  }, [step]);

  const renderContent = () => {
    switch (step) {
      case 0:
        return <Lovebutton text="AMY YAAHAN CLICK KR JALDI" onClick={handleNextStep} />;
      case 1:
        return (
          <div
            className="flex h-screen w-full bg-cover bg-center items-center justify-center"
            style={{ backgroundImage: "url('/bday.gif')" }}
          >
            <Lovebutton text="LETS GO MY LOVE 🤍" onClick={handleNextStep} />
          </div>
        );
      case 2:
        return (
          <div
            className="flex h-screen w-full bg-cover bg-center items-center justify-center"
            style={{ backgroundImage: "url('/bday.gif')" }}
          >
            <Lovebutton text="CLICK FOR CAKE 🍰" onClick={handleNextStep} />
          </div>
        );
      case 3:
        return (
          <div
            className="flex flex-col h-screen w-full bg-cover bg-center items-center"
            style={{ backgroundImage: "url('/bday.gif')" }}
          >
            <BirthdayCake />
            <SplitText className="lg:text-7xl text-5xl text-center font-bold font-calligraffitti text-white p-4">
              HAPPY BIRTHDAY AMNA 😭🥳🎂!
            </SplitText>
            <Lovebutton text="NOW CLICK HERE 😗." onClick={handleNextStep} />
          </div>
        );
      case 4:
        return (
          <div
            className="flex flex-col h-screen w-full bg-cover bg-center items-center justify-center"
            style={{ backgroundImage: "url('/bday.gif')" }}
          >
            {
              lineIndex === 0 && <SplitText className="lg:text-7xl text-center text-4xl font-bold font-calligraffitti text-white p-4">{pickupLines[0]}</SplitText>
            }
            {
              lineIndex === 1 && <SplitText className="lg:text-7xl text-center text-4xl font-bold font-calligraffitti text-white p-4">{pickupLines[1]}</SplitText>
            }
            {
              lineIndex === 2 && <SplitText className="lg:text-7xl text-center text-4xl font-bold font-calligraffitti text-white p-4">{pickupLines[2]}</SplitText>
            }
            {
              lineIndex === 3 && <SplitText className="lg:text-7xl text-center text-4xl font-bold font-calligraffitti text-white p-4">{pickupLines[3]}</SplitText>
            }
            {
              lineIndex === 4 && <SplitText className="lg:text-7xl text-center text-4xl font-bold font-calligraffitti text-white p-4">{pickupLines[4]}</SplitText>
            }
            <Lovebutton
              text={lineIndex < pickupLines.length - 1 ? "Next Line" : "Finish"}
              onClick={handleNextLine}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <audio ref={audioRef} loop>
        <source src="/bday-song.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {renderContent()}
    </div>
  );
};

export default Page;
