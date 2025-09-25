import hero from "../images/hero.svg";

function Hero() {
  return (
    <section className="w-full h-[1156px] mt-[150px]">
      <div className="w-[1140px] h-[240px] flex flex-col gap-[48px] text-center mx-auto">
        <div className="flex flex-col gap-[24px]">
          <h1 className="text-[48px] leading-[60px] h-[60px] font-bold">
            Manage your customers using AI
          </h1>
          <h3 className="text-[20px] leading-[30px] w-[692px] h-[60px] font-medium text-center mx-auto">
            Powerful, flexible and data driven, polio makes it easy to build the
            exact CRM your business needs
          </h3>
        </div>

        <div className="flex justify-center w-[254px] h-[48px] mx-auto gap-[12px]">
          <button className="bg-white border text-gray-800 px-6 py-2 rounded-md">
            Demo
          </button>
          <button className="bg-black text-white px-6 py-2 rounded-md">
            Start for free
          </button>
        </div>
      </div>

      <div className="flex flex-row gap-[10px] w-[1140px] h-[756px] items-center justify-center mx-auto mt-[96px]">
        <img src={hero} alt="hero" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}
export default Hero