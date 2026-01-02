import { useEffect } from "react";
import { useHashLocation } from "wouter";

export function ScrollToTop() {
  const [location] = useHashLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
