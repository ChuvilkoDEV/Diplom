import React from "react";
import HeroSection from './ui/HeroSection'
import EventsList from './ui/EventsList'
import PopularActivities from './ui/PopularActivities'

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <PopularActivities/>
      <EventsList />
    </>
  );
};
