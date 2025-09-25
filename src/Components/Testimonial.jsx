import card from "../images/card.svg";

function Testimonial() {
  return (
    <section className="bg-[#F9FAFB] w-full h-[1404px] top-[4777px] pt-[96px] pr-[150px] pb-[96px] pl-[150px] gap-[64px] flex flex-col">
      <div className="flex flex-col w-[1140px] h-[160px] gap-[10px]">
        <div className="flex flex-col items-center mx-auto w-[575px] h-[80px] gap-[12px]">
          <h4 className="text-[#6B7280] w-[97px] h-[24px] font-jakarta font-bold text-[16px] leading-[24px]">
            Testimonials
          </h4>
          <h2 className="text-[#030712] w-[298px] h-[44px] font-bold font-jakarta text-[36px] leading-[44px] tracking-[-0.02em]">
            Loved by builders
          </h2>
        </div>
        <div className="w-[692px] h-[60px] mx-auto flex items-center justify-center">
          <p className="text-center text-[#6B7280] font-jakarta font-medium text-[20px] leading-[30px]">
            Polo is the customer relationship management tool for everyone who
            values collaboration.
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-[10px] w-[1140px] h-[988px] items-center justify-center mx-auto">
        <img
          src={card}
          alt="card"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
export default Testimonial;
