import React, { useState } from 'react';

export default function GeoLearnPrototype() {
  const screens = {
    splash: {
      title: 'GeoLearn',
      subtitle: 'Learn GIS, Remote Sensing & Data Skills',
      next: 'login',
      button: 'Get Started'
    },
    login: {
      title: 'Welcome Back',
      subtitle: 'Login to continue learning',
      next: 'interests',
      button: 'Continue'
    },
    interests: {
      title: 'Choose Your Interests',
      subtitle: 'Personalize your learning journey',
      next: 'home',
      button: 'Continue'
    },
    home: {
      title: 'Hello Saurav 👋',
      subtitle: 'Continue your learning journey',
      next: 'courses',
      button: 'Explore Courses'
    },
    courses: {
      title: 'Course Discovery',
      subtitle: 'Find trending skills and certifications',
      next: 'detail',
      button: 'Open Course'
    },
    detail: {
      title: 'Remote Sensing with QGIS',
      subtitle: 'Learn satellite image analysis step-by-step',
      next: 'progress',
      button: 'Enroll Now'
    },
    progress: {
      title: 'Learning Progress',
      subtitle: 'You completed 72% of your learning path',
      next: 'community',
      button: 'Open Community'
    },
    community: {
      title: 'Mentor Community',
      subtitle: 'Connect with mentors and learners',
      next: 'home',
      button: 'Back Home'
    }
  };

  const [screen, setScreen] = useState('splash');

  const current = screens[screen] || screens.splash;

  const renderScreenContent = () => {
    switch (screen) {
      case 'interests':
        return (
          <div className="mt-10 flex flex-wrap gap-3">
            {['GIS', 'Remote Sensing', 'Data Analytics', 'Python', 'UI/UX', 'Cloud'].map((item) => (
              <div
                key={item}
                className="px-4 py-2 rounded-full bg-[#EEEAFE] text-[#6C63FF] font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        );

      case 'home':
        return (
          <div className="mt-10 space-y-4">
            <div className="bg-[#6C63FF] text-white rounded-3xl p-5 shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Continue Learning</h2>
              <p className="text-sm opacity-90">GIS Mapping Fundamentals</p>
              <div className="w-full bg-white/30 rounded-full h-2 mt-4 overflow-hidden">
                <div className="bg-white h-2 rounded-full w-[70%]"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F7F8FC] rounded-2xl p-4 shadow-sm">
                <h3 className="font-semibold text-sm">Courses</h3>
                <p className="text-2xl font-bold mt-2">24</p>
              </div>

              <div className="bg-[#F7F8FC] rounded-2xl p-4 shadow-sm">
                <h3 className="font-semibold text-sm">Certificates</h3>
                <p className="text-2xl font-bold mt-2">5</p>
              </div>
            </div>
          </div>
        );

      case 'courses':
        return (
          <div className="mt-10 space-y-4">
            {[1, 2, 3].map((course) => (
              <div
                key={course}
                className="bg-[#F7F8FC] rounded-2xl p-4 flex items-center justify-between shadow-sm"
              >
                <div>
                  <h3 className="font-semibold">Remote Sensing</h3>
                  <p className="text-sm text-[#666666]">Beginner to Advanced</p>
                </div>

                <div className="text-[#6C63FF] font-bold">4.8★</div>
              </div>
            ))}
          </div>
        );

      case 'detail':
        return (
          <div className="mt-10 bg-[#F7F8FC] rounded-3xl p-5 shadow-sm">
            <div className="h-40 bg-[#DDD8FF] rounded-2xl mb-5"></div>

            <h2 className="text-xl font-semibold">Course Overview</h2>

            <p className="text-[#666666] mt-3 leading-6 text-sm">
              Learn GIS mapping, satellite imagery analysis, geospatial workflows, and practical QGIS projects.
            </p>
          </div>
        );

      case 'progress':
        return (
          <div className="mt-10 flex flex-col items-center">
            <div className="w-44 h-44 rounded-full border-[14px] border-[#6C63FF] flex items-center justify-center text-4xl font-bold text-[#6C63FF] shadow-sm">
              72%
            </div>

            <p className="mt-6 text-[#666666] text-center">
              Weekly learning streak: 12 days 🔥
            </p>
          </div>
        );

      case 'community':
        return (
          <div className="mt-10 space-y-4">
            {[1, 2, 3].map((chat) => (
              <div
                key={chat}
                className="bg-[#F7F8FC] rounded-2xl p-4 flex items-center gap-4 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-[#6C63FF]"></div>

                <div>
                  <h3 className="font-semibold">GIS Mentor</h3>
                  <p className="text-sm text-[#666666]">
                    Keep practicing spatial analysis.
                  </p>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F8FC] flex items-center justify-center p-4">
      <div className="w-[390px] h-[844px] bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-200 relative">
        <div className="h-full flex flex-col justify-between p-8">
          <div>
            <div className="flex justify-center mt-6 mb-16">
              <div className="w-20 h-20 rounded-3xl bg-[#6C63FF] flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                G
              </div>
            </div>

            <h1 className="text-3xl font-bold text-[#222222] mb-3">
              {current.title}
            </h1>

            <p className="text-[#666666] text-base leading-7">
              {current.subtitle}
            </p>

            {renderScreenContent()}
          </div>

          <div>
            <button
              onClick={() => setScreen(current.next)}
              className="w-full bg-[#6C63FF] text-white py-4 rounded-2xl text-lg font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              {current.button}
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {Object.keys(screens).map((key) => (
                <div
                  key={key}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    screen === key
                      ? 'w-8 bg-[#6C63FF]'
                      : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
