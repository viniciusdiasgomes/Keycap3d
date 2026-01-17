import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { LogoMark } from "@/components/LogoMark";
import clsx from "clsx";

/**
 * Props for `Marque`.
 */
export type MarqueProps = SliceComponentProps<Content.MarqueSlice>;

/**
 * Component for "Marque" Slices.
 */
const Marque: FC<MarqueProps> = ({ slice }) => {




  const MarqueContent = ()=> (
      <div className="flex items-center bg-gray-200 py-10 whittespace-nowrap">

{slice.primary.phrases.map((item, i) => (
  <Fragment key={i}>
  <div className="font-bold-slanted px-14 text-[180px] leading-none text-gray-400/80 uppercase md:text-[260px]  [text-box:trim-both_cap_alphabetic]">{item.text}</div>
  <LogoMark className="size-36 flex-sherink-0"/>
  </Fragment>
))}

      </div>
  )
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="relative flex w-full items-center overflow-hidden select-none" aria-hidden="true" role="presentation">

      <div className="flex relative items-center whitespace-nowrap">

      <div className={clsx("marque-track animate-marque flex",slice.primary.direction !== "Right" && "[animation-directon:reverse]")}>

    <MarqueContent/>
    <MarqueContent/>
    <MarqueContent/>
    <MarqueContent/>
      </div>
      </div>
      </div>
    </section>
  );
};

export default Marque;
