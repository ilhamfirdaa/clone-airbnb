import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <header className="w-screen h-12 lg:h-14 bg-white md:bg-black flex items-center justify-center">
        <a className="underline lg:no-underline font-semibold text-sm md:text-white" href="https://www.airbnb.com/resources/hosting-homes?persona=guest" rel="noreferrer" target="_blank">
          Get the latest on our COVID-19 response
        </a>
        {/* Desktop Navigation */}
        {/* Mobile Navigation */}
      </header>
      <main>
        <section className="banner">
          <img src="https://a0.muscache.com/im/pictures/8d160e0d-7043-4438-b946-0785bccb6b39.jpg?im_w=720" alt="" className="absolute -z-1 md:hidden" />
          <img src="https://a0.muscache.com/im/pictures/1fe846d6-f32b-4928-8016-035964af42fa.jpg?im_w=1440" alt="" className="absolute -z-1 hidden md:block lg:hidden" />
          <img src="https://a0.muscache.com/im/pictures/f0483d09-7d13-42d0-a40a-46d585c42220.jpg?im_w=2560" alt="" className="absolute -z-1 hidden lg:block lg:top-0" />

          <div className={`${isSticky ? 'bg-white' : ''} transition-all duration-500 ease-in-out w-screen py-4 md:py-2 px-6 sticky top-0`} ref={ref}>
            <div className={`${isSticky ? 'shadow-xl' : ''} flex items-center bg-white rounded-full py-2 px-4 md:hidden`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Where are you going?" />
            </div>

            <div className="hidden md:flex justify-between items-center h-12">
              <div className="">
                <svg width="30" height="32" fill="currentcolor" className={`${isSticky ? 'text-pink-500' : 'text-white'}`}>
                  <path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5z" />
                </svg>
              </div>

              <div className={`${isSticky ? 'visible border text-xs' : 'invisible '} flex bg-white rounded-full py-1 px-4`}>
                <input type="text" placeholder="Start your search" />
                <div className="bg-pink-500 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center gap-x-8">
                <div className={`${isSticky ? 'text-black' : 'text-white'} text-sm`}>
                  Become a host
                </div>

                <div className="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`${isSticky ? 'text-black' : 'text-white'} w-5 h-5`}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>

                <div className={`${isSticky ? 'border shadow' : ''} flex items-center gap-x-1 bg-white rounded-full py-1 px-2`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

            </div>
          </div>

          <div className="w-11/12 py-4 px-2 mx-auto">
            <div className="mt-8">
              <div className="w-1/12">
                <h1 className="text-7xl font-semibold text-white">
                  Go Near
                </h1>
              </div>
              <button type="button" className="bg-gray-200 text-sm py-1 px-4 rounded mt-4">
                Explore nearby stays
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <section className="menu-bottom-bar md:hidden">
          <ul className="flex gap-x-8 text-xs">
            <li className="flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7 text-pink-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>
                Explore
              </span>
            </li>
            <li className="flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-gray-500">
                Saved
              </span>
            </li>
            <li className="flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-500">
                Log in
              </span>
            </li>
          </ul>
        </section>
      </footer>
    </div>
  );
}
