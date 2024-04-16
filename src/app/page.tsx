import { MainDisplay } from "@/components/display/MainDisplay";
import { GenericButton } from "@/components/pressables/GenericButton";
import { StripePad } from "@/components/pressables/StripePad";
import { ColorState } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col p-6 bg-gradient-to-br border border-netural-800  from-neutral-800  to-neutral-950 gap-8">
      <div className="fixed inset-0 pointer-events-none z-[999] mix-blend-soft-light">
        <Image
          src="/overlay.jpg"
          width={2000}
          height={2000}
          className="object-cover opacity-10"
          alt="overlay image"
        />
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2">&nbsp;</div>
        <div className="col-span-8">knobs</div>
        <div className="col-span-2">&nbsp;</div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2">controls</div>
        <div className="col-span-8">
          <div className="grid grid-cols-8 gap-4">
            <StripePad color={ColorState.Purple} position="bottom" isOn />
            <StripePad color={ColorState.Red} position="bottom" />
            <StripePad color={ColorState.Orange} position="bottom" />
            <StripePad color={ColorState.Blue} position="bottom" />
            <StripePad color={ColorState.Blue} position="bottom" />
            <StripePad color={ColorState.Blue} position="bottom" />
            <StripePad color={ColorState.Green} position="bottom" />
            <StripePad color={ColorState.Green} position="bottom" />
          </div>
        </div>
        <div className="col-span-2">control</div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2">control</div>
        <div className="flex flex-col gap-8 col-span-8">
          <div className="grid grid-cols-8 gap-4">
            <StripePad color={ColorState.Purple} position="top" isOn />
            <StripePad color={ColorState.Red} position="top" isOn />
            <StripePad color={ColorState.Orange} position="top" isOn />
            <StripePad color={ColorState.Blue} position="top" isOn />
            <StripePad color={ColorState.Blue} position="top" />
            <StripePad color={ColorState.Blue} position="top" />
            <StripePad color={ColorState.Green} position="top" />
            <StripePad color={ColorState.Green} position="top" />
          </div>
        </div>
        <div className="col-span-2">controls</div>
      </div>
    </main>
  );
}
