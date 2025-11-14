import React, { useState, useEffect, useRef } from 'react';
import { InstagramIcon } from './components/InstagramIcon.js';
import { FootballIcon } from './components/FootballIcon.js';
import { CameraIcon } from './components/CameraIcon.js';

export const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const instagramProfileUrl = 'https://www.instagram.com/abdallah.score.football';

  useEffect(() => {
    // Load saved image from localStorage
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }

    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setProfileImage(result);
        localStorage.setItem('profileImage', result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };


  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden bg-slate-900 text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-slate-900 to-black opacity-80"></div>
      
      {/* Animated content card */}
      <div
        className={`relative z-10 w-full max-w-md mx-auto bg-slate-800 bg-opacity-40 backdrop-blur-lg rounded-2xl shadow-2xl border border-slate-700 transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="p-8 md:p-10 flex flex-col items-center text-center">
          <div className="relative group mb-6">
            <div className="w-32 h-32 md:w-36 md:h-36 bg-emerald-900/50 rounded-full border-4 border-emerald-400 shadow-lg flex items-center justify-center overflow-hidden">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <FootballIcon className="w-20 h-20 text-emerald-300" />
              )}
            </div>
            <button
              onClick={triggerFileInput}
              className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="تغيير الصورة"
            >
              <CameraIcon className="w-10 h-10 text-white" />
            </button>
             <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
              accept="image/*"
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            @abdallah.score.football
          </h1>
          
          <p className="mt-4 text-slate-300 text-lg">
            هنا، نعيد إحياء سحر كرة القدم. من الأهداف الأسطورية واللحظات التي لا تُنسى، إلى التحليلات الفنية العميقة. انضم إلى مجتمعنا وتابعنا لتكون في قلب الحدث الكروي.
          </p>

          <a
            href={instagramProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center w-full md:w-auto px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 hover:shadow-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-slate-900 transition-all duration-300"
            aria-label="متابعة القناة على انستغرام"
          >
            <InstagramIcon className="w-6 h-6 ml-3" />
            <span>تابع القناة</span>
          </a>
        </div>
      </div>
    </div>
  );
};