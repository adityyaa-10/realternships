import AccordionElements from "./AccordionElements";
import RealMarquee from "./RealMarquee";
import { MediumFont } from "@/utils/fonts";

const RealternJourney = () => {
  return (
    <div
      className="h-full w-full bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://s3-alpha-sig.figma.com/img/c3d8/3085/08329883123736554484f266c64d7cf8?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LXcqkULi8it3FEt45oJTayZtQdU4JsBOCR9O-8IXx5XQ6QUen8EaDgqyszE8ZBP0WV2x70uKH60StoBriKh~pOs5LxUZ-s6ilOse1BTFSfxC5SOg155Yt09X5ZvaIFaTAXkub2prHiRIYFAAJU5WorY4mKaGBx-RNHjrk6L6YJF17OrRmvrB7-ZQSgfb~KHE6hXxf6tEJi7sCnMyZhffDOybKcnYy-Z~UMbjVW79FOp9MaA3vq8MVNrwsUBsAAITN835FTJEQKAJ-ub3~1AGmTHMAWwIJ5ShmQOArGjPZ8aeT-wHOWZat6eGm7mJ2116FnXFAbiVtMg68KnFH6ZfaQ__")',
      }}
    >
      <AccordionElements />

      <div className="pb-24">
        <RealMarquee />
      </div>

      <div className="] mx-auto px-4 pb-24 text-white">
        <p
          className={`${MediumFont.className} mx-auto max-w-[842px] text-[25px] leading-[2.7rem] md:text-[28px] md:leading-[3rem]`}
        >
          By becoming a Realtern, you'll not only gain invaluable work
          experience but also become a part of the driving force behind the next
          big thing, positioning yourself at the forefront of innovation and
          preparing for a future filled with endless possibilities.
        </p>
      </div>
    </div>
  );
};

export default RealternJourney;
