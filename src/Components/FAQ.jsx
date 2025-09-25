import trial from "../images/trial.svg";

function FAQ() {
  return (
    <section className="w-full h-[762px] top-[6181pxpx] pt-[96px] pr-[150px] pb-[96px] pl-[150px] gap-[64px] flex flex-col">
      <div className="flex flex-col w-[1140px] h-[94px] gap-[10px] items-center justify-center">
        <h1 className="w-[476px] h-[44px] font-jakarta font-bold text-4xl leading-[44px] tracking-[-0.02em]">
          Frequently Asked Questions
        </h1>

        <div className="w-[692px] h-[30px] mx-auto flex items-center justify-center">
          <p className="text-center text-[#6B7280] font-jakarta font-medium text-[20px] leading-[30px]">
            Everything you need to know about Polio.
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-[10px] w-[1140px] h-[412px] items-center justify-center mx-auto">
        <img src={trial} alt="trial" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}
export default FAQ;
