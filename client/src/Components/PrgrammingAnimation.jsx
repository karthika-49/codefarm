import React from 'react';
import { useSpring, animated } from 'react-spring';
import rocket from "../assets/logo_no_bg_v.png"
import { Image } from '@chakra-ui/react';

const ProgrammingAnimation = () => {
  const animationProps = useSpring({
    to: async (next, cancel) => {
      while (1) {
        await next({ transform: 'translate(0%, -100%)' });
        await next({ transform: 'translate(0%, 100%)' });
      }
    },
    from: { transform: 'translate(0%, 100%)' },
    config: { duration: 7000 },
  });

  return (
    <animated.div
      style={{
        ...animationProps,
        position: 'absolute',
        right: 0,
        height: '100vh',
        width: 'auto', // Adjust the width as needed
      }}
    >
      <Image src={rocket} height={"50px"} alt="Rocket" />
    </animated.div>
  );
};

export default ProgrammingAnimation;
