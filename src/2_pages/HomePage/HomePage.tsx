import React from "react";
import HeroSection from './ui/HeroSection'
import PopularActivities from './ui/PopularActivities'
import EventsList from '@pages/HomePage/ui/EventsList'

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <PopularActivities/>
      <EventsList />
    </>
  );
};
