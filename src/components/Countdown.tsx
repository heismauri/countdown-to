import { memo, useMemo } from "react";
import useCountdown from "@/useCountdown.tsx";

interface CountdownProps {
  timestamp: number;
  class?: string;
  small?: boolean;
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
      <p className="text-sm">{unit}</p>
    </div>
  );
});

const Countdown = memo((props: CountdownProps) => {
  const date = useMemo(() => new Date(props.timestamp), [props.timestamp]);
  const formattedDate = useMemo(() => formatDate(date), [date]);
  const { days, hours, minutes, seconds } = useCountdown(date);

  if (seconds < 0) {
    if (!props.children) return null;
    return (
      <div className="max-w-72 text-center">
        {props.children}
        <div className="lowercase mt-4">
          <p>{formattedDate}</p>
          <p className="text-sm">{userTimeZone}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={["max-w-72 text-center", props.class || ""].join(" ").trim()}>
      <div className="flex justify-center gap-3 px-4">
        {days > 0 && <TimeContainer key="days" time={days} unit="days" small={props.small} />}
        {(hours > 0 || days > 0) && <TimeContainer key="hours" time={hours} unit="hours" small={props.small} />}
        {(minutes > 0 || hours > 0 || days > 0) && (
          <TimeContainer key="mins" time={minutes} unit="mins" small={props.small} />
        )}
        <TimeContainer key="secs" time={seconds} unit="secs" small={props.small} />
      </div>
      <div className="lowercase mt-4">
        <p>{formattedDate}</p>
        <p className="text-sm">{userTimeZone}</p>
      </div>
      {props.children}
    </div>
  );
});

export default Countdown;
