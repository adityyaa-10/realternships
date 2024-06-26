import Image from "next/image";
import { MediumFont } from "@/utils/fonts";
import hero from "@/assets/Community/hero.png";

const Hero = () => {
  return (
    <div className="h-max w-full gap-y-80 bg-white py-16 xl:py-20">
      <div className="flex w-full flex-col items-center justify-end text-[#2C2C2C] lg:flex-row lg:justify-center">
        <div className="flex w-full max-w-[1170px] flex-col items-center justify-end gap-12 text-3xl lg:flex-row lg:gap-6">
          <div
            className={`$ flex w-full flex-col items-start justify-center gap-y-12 pl-3 pt-12 sm:pl-6 lg:w-1/3 lg:pl-0 lg:pt-20`}
          >
            <h1
              className={`${MediumFont.className} text-[40px] leading-[4rem] sm:text-[50px] md:text-[80px] md:leading-[6.8rem]`}
            >
              Experience Inspire{" "}
              <span className="rounded-xl bg-[#DDFC9D] px-2 py-1">Succeed</span>
            </h1>
            <p className="text-2xl leading-[2.625rem] tracking-tight text-black sm:tracking-normal md:leading-[3rem]">
              The Realtern Community is a powerful network of realterns, united
              by their desire to grow, and support each other in achieving their
              ambitious goals.
            </p>
          </div>
          <div className="relative mb-8 h-full w-full lg:w-[60%]">
            <Image
              src={hero}
              alt="image"
              className="h-full w-full object-contain"
            />
            <div className="absolute -left-[0.5px] -top-[0.5px] h-[4rem] w-[4rem] bg-white sm:h-[6.25rem] sm:w-[6.25rem]"></div>
            <div className="absolute -bottom-[0.5px] -right-[0.5px] h-[4rem] w-[4rem] bg-white sm:h-[6.25rem] sm:w-[6.25rem] lg:-left-[0.5px]"></div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[762px] px-4 pt-14 text-left text-[20px] leading-[2.25rem] sm:pt-20 sm:leading-[2.5rem] md:px-0 md:text-center md:leading-[2.8rem] xl:pt-28">
        We believe that the power of community is essential for fostering
        growth, inspiration, and success. Our community page is a vibrant hub
        where Realterns can connect, collaborate, and share their experiences
        with like-minded individuals who are also pushing boundaries and
        bringing amazing ideas to life.
      </div>
    </div>
  );
};

export default Hero;
