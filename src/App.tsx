import Countdown from './components/Countdown.tsx';
import Footer from './components/Footer.tsx';

const App = () => {
  return (
    <>
      <div className="background-overlay-image fixed inset-0 -z-10"
        style={{ backgroundImage: 'url("/nmixx-schedule.jpg")' }}></div>
      <div className="w-full min-h-screen flex flex-col justify-center items-center px-5 py-12">
        <img className="text-center drop-shadow-xl" src="/logo.png" alt="Fe3O4: STICK OUT" width={280} />
        <Countdown
          timestamp={1724058000000}
          actionElement={
            <p>
              <a className="btn-link mt-4"
                href="https://nmixx.lnk.to/Fe3O4STICKOUT">pre-order + pre-save now</a>
            </p>
          }
          finishedElement={
            <p>
              <a className="btn-link mt-4"
                href="https://nmixx.lnk.to/Fe3O4STICKOUT">out now</a>
            </p>
          }
        />
      </div>
      <Footer />
    </>
  );
};

export default App;
