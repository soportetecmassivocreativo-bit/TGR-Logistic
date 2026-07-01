'use client';

import { useEffect, useLayoutEffect, DependencyList } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// We use useLayoutEffect for GSAP in React to ensure DOM is ready, 
// but we fallback to useEffect for SSR safety
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const useGsap = (callback: () => void, dependencies: DependencyList = []) => {
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      callback();
    });

    return () => {
      ctx.revert(); // Cleanup GSAP context on unmount
    };
  }, dependencies);
};
