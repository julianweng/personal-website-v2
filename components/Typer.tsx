"use client"

import Typewriter from 'typewriter-effect';

export default function Typer() {
  return (<h3 className="flex flex-row text-lg md:text-2xl px-2 md:px-0 font-medium text-center animate-fade-in opacity-0 animation-delay-[1500ms]">
    <Typewriter
      options={{
        strings: ['Running', 'Five Rings', 'DP', 'Mint chocolate chip ice cream'],
        autoStart: true,
        deleteSpeed: 50,
        delay: 40,
        loop: true,
      }}
    />
    is my thing</h3>)
}