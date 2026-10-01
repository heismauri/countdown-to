import logo from "@/assets/strange-muse-logo.png";
import Countdown from "@/components/Countdown.tsx";
import { type Event } from "@/types/event.ts";

const Timetable = ({ events }: { events: Event[] }) => {
  return (
    <div className="max-w-md md:max-w-2xl px-6 py-6 bg-black/50 animate-[fade-in-right_1s_ease-out]">
      <div className="grid md:flex gap-x-6 gap-y-12 justify-center">
        <div className="md:w-72 flex flex-col justify-center items-center px-2">
          <img className="max-w-full text-center pointer-events-none w-2xs" src={logo.src} alt="Strange Muse logo" />
          <Countdown timestamp={1792400400000} class="mt-4" keepAfterEnd>
            <a href="https://nmixx.lnk.to/StrangeMuse" target="_blank" rel="noopener noreferrer">
              <div
                className={[
                  "text-sm inline-block py-2 px-6 mt-5 mb-4 bg-stone-50 hover:bg-stone-950 text-stone-950",
                  "hover:text-stone-50 transition-colors duration-300"
                ].join(" ")}
              >
                pre-order + pre-save now
              </div>
            </a>
          </Countdown>
        </div>
        <div
          className={[
            "md:w-72 grid grid-cols-1 gap-6 px-2 justify-center items-center",
            "md:max-h-[calc(100dvh-13rem)] md:overflow-y-auto",
            "md:snap-y md:scroll-smooth [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-stone-800/75",
            "[&::-webkit-scrollbar-thumb]:bg-stone-100 empty:hidden"
          ].join(" ")}
        >
          {events.map((item) => (
            <Countdown
              key={`${item.timestamp}-${item.label}`}
              timestamp={item.timestamp}
              small
              class="snap-start mx-auto"
            >
              <p className="italic text-sm my-1 lowercase">{item.label}</p>
            </Countdown>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timetable;
