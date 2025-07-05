import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-center">
      <h3 className="text-white font-semibold mb-4 text-lg">Launching In</h3>
      <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-3">
          <div className="text-2xl font-bold text-green-400">{timeLeft.days}</div>
          <div className="text-xs text-slate-400 uppercase tracking-wide">Days</div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-3">
          <div className="text-2xl font-bold text-green-400">{timeLeft.hours}</div>
          <div className="text-xs text-slate-400 uppercase tracking-wide">Hours</div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-3">
          <div className="text-2xl font-bold text-green-400">{timeLeft.minutes}</div>
          <div className="text-xs text-slate-400 uppercase tracking-wide">Minutes</div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-3">
          <div className="text-2xl font-bold text-green-400">{timeLeft.seconds}</div>
          <div className="text-xs text-slate-400 uppercase tracking-wide">Seconds</div>
        </div>
      </div>
    </div>
  );
}
