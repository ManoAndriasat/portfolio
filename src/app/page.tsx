'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const [text, setText] = useState('');
  const fullText = 'Maano Andriasat ';
  const coloredText = 'Mano';
  const router = useRouter();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            router.push('/about');
          }, 1000);
        }, 50);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [router]);

  const coloredIndex = text.indexOf(coloredText);

  return (
    <div className="flex justify-center items-center h-screen mb-10">
      <span className="font-bold lg:text-6xl text-3xl">
        {coloredIndex > -1 ? (
          <>
            <span 
              className='transition-opacity duration-500'
              style={{ 
                color: fadeOut ? '#232426' : 'rgba(239,99,81,255)',
                backgroundColor: fadeOut ? 'rgba(239,99,81,255)' : 'transparent',
                padding: '8px', 
                borderRadius: '4px' 
              }}
            >
              {text.slice(0, coloredIndex + coloredText.length)}
            </span>
            <span className='transition-opacity duration-500'>
              {text.slice(coloredIndex + coloredText.length)}
            </span>
          </>
        ) : (
          <span>{text}</span>
        )}
      </span>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Home;
