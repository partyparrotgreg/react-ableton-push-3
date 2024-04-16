export const MainDisplay = () => {
  return (
    <div className="w-[1222px] h-[220px] px-3.5 pt-[11px] pb-3 bg-stone-950 rounded-md shadow shadow-inner flex-col justify-start items-start gap-2 inline-flex">
      <div className="w-[134px] h-[22px] px-3 py-0.5 bg-sky-600 shadow justify-start items-center gap-1 inline-flex">
        <div className="text-center text-black text-base font-medium font-['Inter Tight']">
          Wavetable
        </div>
      </div>
      <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch grow shrink basis-0 justify-start items-start gap-[15px] inline-flex">
          <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch px-[9px] justify-between items-start inline-flex">
              <div className="w-[120px] flex-col justify-start items-start gap-[13px] inline-flex">
                <div className="text-neutral-500 text-base font-normal font-['Inter']">
                  Oscillator
                </div>
                <div className="self-stretch mix-blend-lighten justify-start items-start gap-[3px] inline-flex">
                  <div className="grow shrink basis-0 h-3 justify-start items-start gap-[3px] flex">
                    <div className="text-sky-600 text-base font-normal font-['Inter']">
                      1
                    </div>
                    <div className="text-zinc-700 text-base font-normal font-['Inter']">
                      2
                    </div>
                    <div className="text-zinc-700 text-base font-normal font-['Inter']">
                      S
                    </div>
                    <div className="text-zinc-700 text-base font-normal font-['Inter']">
                      Mix
                    </div>
                    <div className="text-zinc-700 text-base font-normal font-['Inter']">
                      Mix
                    </div>
                    <div className="text-zinc-700 text-base font-normal font-['Inter']">
                      Mix
                    </div>
                  </div>
                  <div className="w-[120px] h-3 relative bg-gradient-to-r from-black to-stone-950" />
                </div>
              </div>
              <div className="w-[120px] flex-col justify-start items-start gap-[13px] inline-flex">
                <div className="text-neutral-500 text-base font-normal font-['Inter']">
                  Table
                </div>
                <div className="self-stretch mix-blend-lighten justify-start items-start gap-[3px] inline-flex">
                  <div className="grow shrink basis-0 h-3 justify-start items-start gap-[3px] flex">
                    <div className="text-sky-600 text-base font-normal font-['Inter']">
                      Squarrely
                    </div>
                    <div className="text-zinc-700 text-base font-normal font-['Inter']">
                      Strong
                    </div>
                    <div className="text-zinc-700 text-base font-normal font-['Inter']">
                      S
                    </div>
                    <div className="text-zinc-700 text-base font-normal font-['Inter']">
                      Mix
                    </div>
                    <div className="text-zinc-700 text-base font-normal font-['Inter']">
                      Mix
                    </div>
                    <div className="text-zinc-700 text-base font-normal font-['Inter']">
                      Mix
                    </div>
                  </div>
                  <div className="w-[120px] h-3 relative bg-gradient-to-r from-black to-stone-950" />
                </div>
              </div>
              <div className="w-[120px] flex-col justify-start items-start gap-[13px] inline-flex">
                <div className="text-neutral-500 text-base font-normal font-['Inter']">
                  Position
                </div>
                <div className="self-stretch mix-blend-lighten justify-start items-start gap-[3px] inline-flex">
                  <div className="grow shrink basis-0 h-3 justify-start items-start gap-[3px] flex">
                    <div className="text-sky-600 text-base font-normal font-['Inter']">
                      51 %
                    </div>
                  </div>
                  <div className="w-[120px] h-3 relative bg-gradient-to-r from-black to-stone-950" />
                </div>
              </div>
            </div>
            <div className="self-stretch grow shrink basis-0 pr-6 justify-start items-start gap-[18px] inline-flex">
              <div className="grow shrink basis-0 self-stretch py-4 flex-col justify-start items-start gap-2 inline-flex" />
            </div>
          </div>
          <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch px-[9px] justify-between items-start inline-flex">
              <div className="w-[120px] flex-col justify-start items-start gap-[13px] inline-flex">
                <div className="text-neutral-500 text-base font-normal font-['Inter']">
                  Filter Type
                </div>
                <div className="justify-start items-start gap-2 inline-flex" />
              </div>
              <div className="w-[120px] flex-col justify-start items-start gap-[13px] inline-flex">
                <div className="text-neutral-500 text-base font-normal font-['Inter']">
                  Frequency
                </div>
                <div className="self-stretch mix-blend-lighten justify-start items-start gap-[3px] inline-flex">
                  <div className="grow shrink basis-0 h-3 justify-start items-start gap-[3px] flex">
                    <div className="text-sky-600 text-base font-normal font-['Inter']">
                      4.0 kHz
                    </div>
                  </div>
                  <div className="w-[120px] h-3 relative bg-gradient-to-r from-black to-stone-950" />
                </div>
              </div>
              <div className="w-[120px] flex-col justify-start items-start gap-[13px] inline-flex">
                <div className="text-neutral-500 text-base font-normal font-['Inter']">
                  Resonance
                </div>
                <div className="self-stretch mix-blend-lighten justify-start items-start gap-[3px] inline-flex">
                  <div className="grow shrink basis-0 h-3 justify-start items-start gap-[3px] flex">
                    <div className="text-sky-600 text-base font-normal font-['Inter']">
                      0.0 %
                    </div>
                  </div>
                  <div className="w-[120px] h-3 relative bg-gradient-to-r from-black to-stone-950" />
                </div>
              </div>
            </div>
            <div className="self-stretch grow shrink basis-0 pr-8 justify-start items-start gap-[18px] inline-flex">
              <div className="grow shrink basis-0 self-stretch flex-col justify-end items-start gap-2 inline-flex">
                <div className="w-[332.50px] h-[50px] relative shadow">
                  <div className="w-3.5 h-3.5 left-[194.50px] top-[36px] absolute rounded-full border-2 border-sky-600" />
                  <div className="w-3.5 h-3.5 left-[301.50px] top-[36px] absolute bg-sky-600 rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[121px] justify-between items-start flex">
            <div className="flex-col justify-start items-start gap-[11px] inline-flex">
              <div className="h-[50px] flex-col justify-start items-start gap-[13px] flex">
                <div className="text-neutral-500 text-base font-normal font-['Inter']">
                  Mod Time
                </div>
                <div className="text-sky-600 text-[34px] font-light font-['Inter']">
                  26 %
                </div>
              </div>
              <div className="w-[60px] h-[60px] relative" />
            </div>
            <div className="flex-col justify-start items-start gap-[11px] inline-flex">
              <div className="h-[50px] flex-col justify-start items-start gap-[13px] flex">
                <div className="text-neutral-500 text-base font-normal font-['Inter']">
                  Mod Time
                </div>
                <div className="text-sky-600 text-[34px] font-light font-['Inter']">
                  68 %
                </div>
              </div>
              <div className="w-[60px] h-[60px] relative" />
            </div>
          </div>
        </div>
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="w-[134px] h-[22px] px-3 py-0.5 shadow justify-start items-center gap-1 flex">
            <div className="text-center text-sky-600 text-base font-medium font-['Inter Tight']">
              Wavetable
            </div>
          </div>
          <div className="w-[134px] h-[22px] px-3 py-0.5 bg-sky-600 shadow justify-start items-center gap-1 flex">
            <div className="w-3.5 h-3.5 relative" />
            <div className="text-center text-black text-base font-medium font-['Inter Tight']">
              Pads
            </div>
          </div>
          <div className="w-[134px] h-[22px] px-3 py-0.5 shadow justify-start items-center gap-1 flex">
            <div className="text-center text-orange-400 text-base font-medium font-['Inter Tight']">
              Wavetable
            </div>
          </div>
          <div className="w-[134px] h-[22px] px-3 py-0.5 shadow justify-start items-center gap-1 flex">
            <div className="text-center text-green-600 text-base font-medium font-['Inter Tight']">
              Wavetable
            </div>
          </div>
          <div className="w-[134px] h-[22px] px-3 py-0.5 shadow justify-start items-center gap-1 flex">
            <div className="text-center text-green-600 text-base font-medium font-['Inter Tight']">
              Vocal
            </div>
          </div>
          <div className="w-[134px] h-[22px] px-3 py-0.5 shadow justify-start items-center gap-1 flex">
            <div className="text-center text-purple-400 text-base font-medium font-['Inter Tight']">
              FX
            </div>
          </div>
          <div className="w-[134px] h-[22px] px-3 py-0.5 shadow justify-start items-center gap-1 flex">
            <div className="text-center text-green-600 text-base font-medium font-['Inter Tight']">
              MoogPhatty
            </div>
          </div>
          <div className="w-[134px] h-[22px] px-3 py-0.5 shadow justify-start items-center gap-1 flex">
            <div className="text-center text-orange-400 text-base font-medium font-['Inter Tight']">
              Drum Machine
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
