import React from "react";
import HeroSection from './ui/HeroSection'
import EventsList from '@pages/HomePage/ui/EventsList'

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <EventsList />
    </>
  );
};
