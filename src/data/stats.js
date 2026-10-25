// `at` = scroll progress (0–1) when the card appears; y = entry offset; rot = final tilt (deg)
export const STATS = [
  { id: 'pickup-a', value: '58%', text: 'Increase in pick up point use',
    theme: 'bg-sun text-ink shadow-[.6vw_.6vw_0_#c9961a]',
    pos: 'left-[49vw] top-[7vh] w-[19vw] max-md:left-[4vw] max-md:top-[7vh]', at: 0.20, y: -40, rot: -2 },
  { id: 'pickup-b', value: '27%', text: 'Increase in pick up point use',
    theme: 'bg-violet text-white shadow-[.6vw_.6vw_0_#4a35c4]',
    pos: 'left-[71vw] top-[9vh] w-[17.5vw] max-md:left-[52vw] max-md:top-[10vh]', at: 0.42, y: -40, rot: 2.5 },
  { id: 'calls-a', value: '23%', text: 'Decreased in customer phone calls',
    theme: 'bg-aqua text-ink shadow-[.6vw_.6vw_0_#16a592]',
    pos: 'left-[42vw] top-[74vh] w-[20.5vw] max-md:left-[4vw] max-md:top-[70vh]', at: 0.30, y: 40, rot: 2 },
  { id: 'calls-b', value: '40%', text: 'Decreased in customer phone calls',
    theme: 'bg-coral text-ink shadow-[.6vw_.6vw_0_#c23550]',
    pos: 'left-[65vw] top-[72vh] w-[20.5vw] max-md:left-[52vw] max-md:top-[73vh]', at: 0.54, y: 40, rot: -2 },
];
