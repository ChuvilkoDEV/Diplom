import React from "react";
import HeroSection from './ui/HeroSection'
import PopularActivities from './ui/PopularActivities'
import EventsSection from '@pages/HomePage/ui/EventsSection'

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <PopularActivities/>
      <EventsSection />
    </>
  );
};
