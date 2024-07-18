'use client';
import React from 'react';
import { useCountdown } from './useCounter';
import { cinzel } from '@/constants';
import { MotionBox } from '../MotionBox';

interface CountdownProps { targetDate: string, };

export const Countdown = ({ targetDate }: CountdownProps) => {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <div className='flex items-center gap-[10px] md:gap-[6px]'>

      <MotionBox delay={0.25} className="counter-item">
        <div className={`counter-number ${cinzel.className}`}>{days}</div>
        <span className='counter-text'>Дней</span>
      </MotionBox>

      <span className='quote'>:</span>

      <MotionBox delay={0.35} className="counter-item">
        <div className={`counter-number ${cinzel.className}`}>{hours}</div>
        <span className='counter-text'>часов</span>
      </MotionBox>

      <span className='quote'>:</span>

      <MotionBox delay={0.45} className="counter-item">
        <div className={`counter-number ${cinzel.className}`}>{minutes}</div>
        <span className='counter-text'>минут</span>
      </MotionBox>

      <span className='quote'>:</span>

      <MotionBox delay={0.55} className="counter-item">
        <div className={`counter-number ${cinzel.className}`}>{seconds}</div>
        <span className='counter-text'>секунд</span>
      </MotionBox>

    </div>
  );
};

