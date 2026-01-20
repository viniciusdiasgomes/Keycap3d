import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import { clsx } from "clsx";
import { FadeIn } from "@/components/FadeIn";

export type BentoBoxProps = SliceComponentProps<Content.BentoBoxSlice>;

// tipo do item (gerado pelo Slice Machine)
type BentoBoxItemProps = {
  item: Content.BentoBoxSliceDefaultPrimaryItemsItem;
};

const BentoBox: FC<BentoBoxProps> = ({ slice }) => {
  console.log("BentoBox slice.primary.items:", slice.primary.items);

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <FadeIn>

      <h2 id="features" className="font-bold-slanted mb-8 scroll-pt-6 text-6xl uppercase md:text-8xl">
        <PrismicText field={slice.primary.heading} />
      </h2>
      </FadeIn>



      <FadeIn targetChildren className="grid grid-cols-1 gap-4 md:grid-cols-6">
        {slice.primary.items.map((item, i) => (
          <BentoBoxItem key={i} item={item} />
        ))}
      </FadeIn>
    </Bounded>
  );
};

export default BentoBox;
  
function BentoBoxItem({ item }: BentoBoxItemProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-3xl aspect-[4/3]",
        item.size === "Small" && "md:col-span-2",
        item.size === "Medium" && "md:col-span-3",
        item.size === "Large" && "md:col-span-4"
      )}
    >
      {item.image?.url && (
        <PrismicNextImage
          field={item.image}
          className="h-full w-full object-cover"
          width={700}
          quality={96}
        />
      )}

      <div className="absolute iset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-black "></div>

      <div className="absolute bottom-0 left-0 max-w-xl p-6 text-xl text-white">
        <PrismicRichText field={item.text} />
      </div>
    </div>
  );
}
