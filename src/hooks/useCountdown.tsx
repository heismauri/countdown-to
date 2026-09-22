import { useEffect, useState } from "react";

const getTimes = (distance: number) => {
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds
  };
};

const useCountdown = (date: Date) => {
  const countDownDate = date.getTime();
  const [countDown, setCountDown] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => {
      const remaining = countDownDate - new Date().getTime();
      setCountDown(remaining);
      return remaining;
    };

    if (tick() <= 0) return;

    const interval = setInterval(() => {
      if (tick() <= 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return countDown === null ? null : getTimes(countDown);
};

export default useCountdown;
