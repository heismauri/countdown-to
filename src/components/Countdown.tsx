import useCountdown from '../useCountdown.tsx';

type CountdownProps = {
  timestamp: number;
  actionElement?: React.ReactNode;
  finishedElement?: React.ReactNode;
}

type TimeContainerProps = {
  time: number;
  unit: string;
}

const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat([], { dateStyle: 'short', timeStyle: 'medium' }).format(date).split('/').join('.')
    .replace(',', '');
};

const TimeContainer = (props: TimeContainerProps) => {
  return (
    <div>
      <p className="text-4xl">{String(props.time).padStart(2, '0')}</p>
      <p className="text-sm">{props.unit}</p>
    </div>
  );
};

const Countdown = (props: CountdownProps) => {
  const date = new Date(props.timestamp);
  const {
    days, hours, minutes, seconds
  } = useCountdown(date);
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const formattedDate = formatDate(date);

  if (seconds < 0) {
    if (!props.finishedElement) return <></>;
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
    <div className="max-w-72 my-4 text-center fade-in-pop">
      <div className="flex justify-center gap-3 px-4">
        {(days > 0) && <TimeContainer time={days} unit="days" />}
        {(hours > 0 || days > 0) && <TimeContainer time={hours} unit="hours" />}
        {(minutes > 0 || hours > 0 || days > 0) && <TimeContainer time={minutes} unit="mins" />}
        <TimeContainer time={seconds} unit="secs" />
      </div>
      <div className="lowercase mt-4">
        <p>{formattedDate}</p>
        <p className="text-sm">{userTimeZone}</p>
      </div>
      {props.actionElement}
    </div>
  );
};

export default Countdown;
