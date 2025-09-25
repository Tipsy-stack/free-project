import amazon from "../images/amazon.svg";
import coke from "../images/coke.svg";
import fedex from "../images/fedex.svg";
import nike from "../images/nike.svg";
import walmart from "../images/walmart.svg";

function Social() {
  return (
    <section className="w-full h-[280px] top-[1236px] pt-[96px] pr-[150px] pb-[96px] pl-[150px] flex flex-col gap-[10px]">
      <div className="w-[1140px] h-[88px] flex flex-col gap-[32px] text-center mx-auto">
        <div className="w-[1140px] h-[24px] flex justify-center items-center">
          <h1 className="font-jakarta font-medium text-[16px] leading-6">
            Trusted by fortune 500 companies
          </h1>
        </div>

        <div className="flex w-[1140px] h-[32px] justify-between">
            <div className="bg-white w-[107px] h-[32px]">
                <img src={amazon} alt="" />
            </div>
            <div className="bg-white w-[98px] h-[32px]">
                <img src={coke} alt="" />
            </div>
            <div className="bg-white w-[104px] h-[32px]">
                <img src={fedex} alt="" />
            </div>
            <div className="bg-white w-[91px] h-[32px]">
                <img src={nike} alt="" />
            </div>
            <div className="bg-white w-[135px] h-[32px]">
                <img src={walmart} alt="" />
            </div>
        </div>
      </div>
    </section>
  );
}
export default Social;
