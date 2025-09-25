function Trial() {
  return (
    <section className="flex flex-col w-full h-[376px] top-[2400px] pt-[96px] pr-[150px] pb-[96px] pl-[150px] gap-[10px]">
      <div className="flex flex-col w-[1140px] h-[184px] gap-[10px]">
        <div className="flex flex-col items-center mx-auto w-[1140px] h-[94px] pr-[224px] pl-[224px] gap-[20px]">
          <h1 className="flex justify-center font-jakarta font-bold text-4xl leading-[44px] gap-[12px] w-[468px] h-[44px]">
            Start your 30-days free trial
          </h1>

          <p className="w-[692px] h-[30px] font-jakarta font-medium text-[20px] leading-[30px] text-center">
            Join 1500+ companies today and start growing your business
          </p>
        </div>
        <div className="w-[293px] h-[48px] flex justify-center items-center mx-auto mt-8 gap-[12px]">
          <button className="bg-white border text-gray-800 px-6 py-2 rounded-md">
            Learn More
          </button>
          <button className="bg-black text-white px-6 py-2 rounded-md">
            Start for free
          </button>
        </div>
      </div>
    </section>
  );
}
export default Trial;
