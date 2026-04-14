import Countdown from './components/Countdown.tsx';
import Footer from './components/Footer.tsx';

import logo from './assets/images/logo.png';
import background from './assets/images/nmixx-schedule.jpg';

const App = () => {
  return (
    <>
      <div className="background-overlay-image fixed inset-0 -z-10">
        <div
          className="absolute inset-0 bg-white bg-center bg-repeat"
          style={{ backgroundImage: `url(${background})` }}
        />
      </div>
      <div className="w-full min-h-screen flex flex-col justify-center items-center px-5 py-12 mx-auto">
        <div className="bg-white text-black px-5 py-12">
          <img
            className="text-center pointer-events-none"
            src={logo}
            alt="NMIXX logo"
            width={280}
          />
          <Countdown timestamp={1755835200000} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
