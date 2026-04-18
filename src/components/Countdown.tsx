import { memo, useMemo } from "react";

import useCountdown from "@/hooks/useCountdown";

interface CountdownProps {
  timestamp: number;
  class?: string;
  small?: boolean;
  keepAfterEnd?: boolean;
  children?: React.ReactNode;
}

interface TimeContainerProps {
  time: number;
  unit: string;
  small?: boolean;
}

const dateFormatter = new Intl.DateTimeFormat([], {
  dateStyle: "short",
  timeStyle: "medium"
});

const userTimeZone = dateFormatter.resolvedOptions().timeZone;

const formatDate = (date: Date): string => {
  return dateFormatter.format(date).split("/").join(".").replace(",", "");
};

const TimeContainer = memo(({ time, unit, small = false }: TimeContainerProps) => {
  return (
    <div>
      <p className={small ? "text-2xl" : "text-4xl"}>{String(time).padStart(2, "0")}</p>
      <p className={small ? "text-xs" : "text-sm"}>{unit}</p>
    </div>
  );
});

const Countdown = memo(
  ({ timestamp, class: className = "", small = false, keepAfterEnd = false, children }: CountdownProps) => {
    const date = useMemo(() => new Date(timestamp), [timestamp]);
    const formattedDate = useMemo(() => formatDate(date), [date]);
    const { days, hours, minutes, seconds } = useCountdown(date);

    if (seconds < 0) {
      if (!keepAfterEnd) return null;
      return (
        <div className="max-w-72 text-center">
          {children}
          <div className="lowercase mt-4">
            <p className={small ? "text-sm" : "text-base"}>{formattedDate}</p>
            <p className={small ? "text-xs" : "text-sm"}>{userTimeZone}</p>
          </div>
        </div>
      );
    }

    return (
      <div className={["max-w-72 text-center", className].join(" ").trim()}>
        <div className="flex justify-center gap-3 px-4">
          {days > 0 && <TimeContainer key="days" time={days} unit="days" small={small} />}
          {(hours > 0 || days > 0) && <TimeContainer key="hours" time={hours} unit="hours" small={small} />}
          {(minutes > 0 || hours > 0 || days > 0) && (
            <TimeContainer key="mins" time={minutes} unit="mins" small={small} />
          )}
          <TimeContainer key="secs" time={seconds} unit="secs" small={small} />
        </div>
        {children}
        <div className="lowercase">
          <p className={small ? "text-sm" : "text-base"}>{formattedDate}</p>
          <p className={small ? "text-xs" : "text-sm"}>{userTimeZone}</p>
        </div>
      </div>
    );
  }
);

export default Countdown;
