import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import useRipple from '@/hooks/useRipple';
import Image from 'next/image';

type AccordionItem = {
  title: string;
  content: string;
  icon: string;
};

const accordionItems: AccordionItem[] = [
  {
    title: 'Web Dev.',
    content: 'Full Renders content...',
    icon: '/svg/dev.svg',
  },
  {
    title: 'UX/UI',
    content: 'Speedpaints content...',
    icon: '/svg/design.svg',
  },
  { title: 'Art', content: 'Characters content...', icon: '/svg/art.svg' },
  { title: 'Music', content: 'Sketches content...', icon: '/svg/music.svg' },
];

const StyledAccordionItem = styled.div`
  border-top: 1px ${({ theme }) => theme.colors.fade} solid;
  /* padding-left: 20px;
  padding-right: 20px; */
  :hover {
    background: ${({ theme }) => theme.colors.onBackground};
  }

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    transform: scale(1) translate(-50%, -50%);
    opacity: 0;
    transition: transform 0s, opacity 0.5s;
  }

  :active::after {
    transform: scale(100) translate(-50%, -50%);
    opacity: 0;
  }
`;

const StyledAccordion = styled.div`
  background: none;
`;

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const accordionClasses: string = `accordion w-full max-w-xl  ${
    activeIndex !== null ? 'fixed top-100 left-0' : ''
  }`;

  const toggleItem = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  //create a ref to reference the button
  const rippleRef = React.useRef<HTMLDivElement>(null);
  //pass the ref to the useRipple hook
  const ripples = useRipple(rippleRef);

  return (
    <>
      <CSSTransition
        in={activeIndex !== null}
        timeout={300}
        classNames={'accordion'}
      >
        <StyledAccordion className={accordionClasses}>
          {accordionItems.map((item, index) => (
            <StyledAccordionItem key={index} ref={rippleRef}>
              {ripples}
              <div
                className='p-4 pr-8 pl-8 cursor-pointer flex tracking-wider'
                onClick={() => toggleItem(index)}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={25}
                  height={25}
                  style={{ marginRight: 15 }}
                />
                <h3 className='text-base tracking-widest uppercase font-light'>
                  {item.title}
                </h3>
              </div>
              <CSSTransition
                in={activeIndex === index}
                timeout={150}
                classNames='accordionItem'
                unmountOnExit
              >
                <div className={`accordionItem-enter bg-zinc-800`}>
                  <div className='p-4 h-full'>
                    <p>{item.content}</p>
                  </div>
                </div>
              </CSSTransition>
            </StyledAccordionItem>
          ))}
        </StyledAccordion>
      </CSSTransition>
    </>
  );
};

export default Accordion;
