import feature2 from "../images/feature2.svg";

function Features2() {
  return (
    <section className="bg-[#F9FAFB] w-full h-[1448px] top-[2728px] pt-[96px] pr-[150px] pb-[96px] pl-[150px] gap-[64px] flex flex-col">
      <div className="flex flex-col w-[1140px] h-[160px] gap-[10px]">
        <div className="flex flex-col items-center mx-auto w-[497px] h-[80px] gap-[12px]">
          <h4 className="text-[#6B7280] w-[69px] h-[24px] font-jakarta font-bold text-[16px] leading-[24px]">
            Features
          </h4>
          <h2 className="text-[#030712] w-[497px] h-[44px] font-bold font-jakarta text-[34px] leading-[44px] ">
            The CRM that's truly your own
          </h2>
        </div>
        <div className="w-[692px] h-[60px] mx-auto flex items-center justify-center">
          <p className="text-center text-[#6B7280] font-jakarta font-medium text-[20px] leading-[30px]">
            Engage with your customers through the right channel at the right
            time and with the right message
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-[10px] w-[1140px] h-[1032px] items-center justify-center mx-auto">
            <img src={feature2} alt="feature2" className="w-full h-full object-cover" />
          </div>
    </section>
  );
}
export default Features2