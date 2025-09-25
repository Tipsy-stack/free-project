import rich from "../images/rich.svg";
import text from "../images/text.svg";
import chart from "../images/chart.svg";
import load from "../images/load.svg";
import quality from "../images/quality.svg";
import box from "../images/box.svg";

function Features() {
  return (
    <section className="bg-[#F9FAFB] flex flex-col w-full h-[884px] top-[1516px] pt-[96px] pr-[150px] pb-[96px] pl-[150px] gap-[64px]">
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

      <div className="w-[1140px] h-[468px] flex flex-col gap-[10px]">
        <div className="w-[1140px] h-[202px] flex gap-[32px]">
          <div className="w-[358.67px] h-[202px] flex flex-col gap-[20px]">
            <div className="w-[48px] h-[48px] rounded-full bg-[#E5E7EB] flex items-center justify-center mx-auto">
              <img src={rich} alt="" />
            </div>

            <div className="w-full h-[110px] flex flex-col gap-[8px]">
              <div className="w-full h-[30px] text-center">
                <h1 className="text-[20px] font-jakarta font-semibold leading-[30px]">
                  Rich Analytics
                </h1>
              </div>

              <div className="w-full h-[72px]">
                <p className="text-[16px] font-jakarta font-medium leading-[24px] text-center px-4">
                  Easy data management with a dedicated admin panel and a
                  developer platform to extend what polio CRM can do{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[358.67px] h-[202px] flex flex-col gap-[20px]">
            <div className="w-[48px] h-[48px] rounded-full bg-[#E5E7EB] flex items-center justify-center mx-auto">
              <img src={text} alt="" />
            </div>

            <div className="w-full h-[110px] flex flex-col gap-[8px]">
              <div className="w-full h-[30px] text-center">
                <h1 className="text-[20px] font-jakarta font-semibold leading-[30px]">
                  24/7 Support
                </h1>
              </div>

              <div className="w-full h-[72px]">
                <p className="text-[16px] font-jakarta font-medium leading-[24px] text-center px-4">
                  Easy data management with a dedicated admin panel and a
                  developer platform to extend what polio CRM can do{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[358.67px] h-[202px] flex flex-col gap-[20px]">
            <div className="w-[48px] h-[48px] rounded-full bg-[#E5E7EB] flex items-center justify-center mx-auto">
              <img src={chart} alt="" />
            </div>

            <div className="w-full h-[110px] flex flex-col gap-[8px]">
              <div className="w-full h-[30px] text-center">
                <h1 className="text-[20px] font-jakarta font-semibold leading-[30px]">
                  100+ Integrations
                </h1>
              </div>

              <div className="w-full h-[72px]">
                <p className="text-[16px] font-jakarta font-medium leading-[24px] text-center px-4">
                  Easy data management with a dedicated admin panel and a
                  developer platform to extend what polio CRM can do{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[1140px] h-[202px] flex gap-[32px]">
          <div className="w-[358.67px] h-[202px] flex flex-col gap-[20px]">
            <div className="w-[48px] h-[48px] rounded-full bg-[#E5E7EB] flex items-center justify-center mx-auto">
              <img src={load} alt="" />
            </div>

            <div className="w-full h-[110px] flex flex-col gap-[8px]">
              <div className="w-full h-[30px] text-center">
                <h1 className="text-[20px] font-jakarta font-semibold leading-[30px]">
                  Easy Transportation
                </h1>
              </div>

              <div className="w-full h-[72px]">
                <p className="text-[16px] font-jakarta font-medium leading-[24px] text-center px-4">
                  Easy data management with a dedicated admin panel and a
                  developer platform to extend what polio CRM can do{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[358.67px] h-[202px] flex flex-col gap-[20px]">
            <div className="w-[48px] h-[48px] rounded-full bg-[#E5E7EB] flex items-center justify-center mx-auto">
              <img src={quality} alt="" />
            </div>

            <div className="w-full h-[110px] flex flex-col gap-[8px]">
              <div className="w-full h-[30px] text-center">
                <h1 className="text-[20px] font-jakarta font-semibold leading-[30px]">
                  Quality Services
                </h1>
              </div>

              <div className="w-full h-[72px]">
                <p className="text-[16px] font-jakarta font-medium leading-[24px] text-center px-4">
                  Easy data management with a dedicated admin panel and a
                  developer platform to extend what polio CRM can do{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[358.67px] h-[202px] flex flex-col gap-[20px]">
            <div className="w-[48px] h-[48px] rounded-full bg-[#E5E7EB] flex items-center justify-center mx-auto">
              <img src={box} alt="" />
            </div>

            <div className="w-full h-[110px] flex flex-col gap-[8px]">
              <div className="w-full h-[30px] text-center">
                <h1 className="text-[20px] font-jakarta font-semibold leading-[30px]">
                  Trusted Services
                </h1>
              </div>

              <div className="w-full h-[72px]">
                <p className="text-[16px] font-jakarta font-medium leading-[24px] text-center px-4">
                  Easy data management with a dedicated admin panel and a
                  developer platform to extend what polio CRM can do{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Features;
