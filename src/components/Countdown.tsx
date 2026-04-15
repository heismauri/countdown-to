import { memo, useMemo } from "react";
import useCountdown from "@/useCountdown.tsx";

interface CountdownProps {
  timestamp: number;
  startElement?: React.ReactNode;
  endElement?: React.ReactNode;
  actionElement?: React.ReactNode;
  finishedElement?: React.ReactNode;
}

interface TimeContainerProps {
  time: number;
  unit: string;
}

const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat([], {
    dateStyle: "short",
    timeStyle: "medium"
  })
    .format(date)
    .split("/")
    .join(".")
    .replace(",", "");
};

const TimeContainer = memo(({ time, unit }: TimeContainerProps) => {
  return (
    <div>
      <p className="text-4xl">{String(time).padStart(2, "0")}</p>
      <p className="text-sm">{unit}</p>
    </div>
  );
});

const Countdown = (props: CountdownProps) => {
  const date = useMemo(() => new Date(props.timestamp), [props.timestamp]);
  const formattedDate = useMemo(() => formatDate(date), [date]);
  const userTimeZone = useMemo(() => Intl.DateTimeFormat().resolvedOptions().timeZone, []);
  const { days, hours, minutes, seconds } = useCountdown(date);

  if (seconds < 0) {
    if (!props.finishedElement) return null;
    return (
      <div className="max-w-72 text-center fade-in-pop">
        {props.finishedElement}
        <div className="lowercase mt-4">
          <p>{formattedDate}</p>
          <p className="text-sm">{userTimeZone}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-72 mt-4 text-center fade-in">
      {props.startElement}
      <div className="flex justify-center gap-3 px-4">
        {days > 0 && <TimeContainer key="days" time={days} unit="days" />}
        {(hours > 0 || days > 0) && <TimeContainer key="hours" time={hours} unit="hours" />}
        {(minutes > 0 || hours > 0 || days > 0) && <TimeContainer key="mins" time={minutes} unit="mins" />}
        <TimeContainer key="secs" time={seconds} unit="secs" />
      </div>
      <div className="lowercase mt-4">
        <p>{formattedDate}</p>
        <p className="text-sm">{userTimeZone}</p>
      </div>
      {props.actionElement}
      {props.endElement}
    </div>
  );
};

export default Countdown;
