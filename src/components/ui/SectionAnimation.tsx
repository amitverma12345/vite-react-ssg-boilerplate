import { useRef, useEffect, useState, ReactNode } from 'react';

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in';
type AnimationDelay = 'none' | 'sm' | 'md' | 'lg';

interface SectionAnimationProps {
  children: ReactNode;
  type?: AnimationType;
  delay?: AnimationDelay;
  className?: string;
  threshold?: number;
}

export default function SectionAnimation({
  children,
  type = 'fade-up',
  delay = 'none',
  className = '',
  threshold = 0.1,
}: SectionAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    const base = 'transition-all duration-700 ease-out';
    const delayClass = 
      delay === 'sm' ? 'delay-150' :
      delay === 'md' ? 'delay-300' :
      delay === 'lg' ? 'delay-500' : '';

    if (!isVisible) {
      const initialStyles = {
        'fade-up': 'opacity-0 translate-y-10',
        'fade-down': 'opacity-0 -translate-y-10',
        'fade-left': 'opacity-0 translate-x-10',
        'fade-right': 'opacity-0 -translate-x-10',
        'zoom-in': 'opacity-0 scale-95',
      };
      return `${base} ${delayClass} ${initialStyles[type]}`;
    }

    return `${base} ${delayClass} opacity-100 translate-x-0 translate-y-0 scale-100`;
  };

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  );
} 