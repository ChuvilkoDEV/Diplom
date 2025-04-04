import React from "react";
import HeroSection from './ui/HeroSection'
import EventsList from '@pages/HomePage/ui/EventsList'
import PopularActivities from '@pages/HomePage/ui/PopularActivities'

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <PopularActivities/>
      <EventsList />
    </>
  );
};
