import Logo from "../images/Logo.svg";
import Lines from "../images/Lines.svg";
import figma from "../images/figma.svg";
import zapier from "../images/zapier.svg";
import dropbox from "../images/dropbox.svg";
import intercom from "../images/intercom.svg";
import chimp from "../images/chimp.svg";
import notion from "../images/notion.svg";
import slack from "../images/slack.svg";
import drive from "../images/drive.svg";
import stripe from "../images/stripe.svg";
import zen from "../images/zen.svg";

function Integrations() {
  return (
    <section className="w-full h-[701px] top-[4172px] pt-[96px] pr-[150px] pb-[96px] pl-[150px] gap-[64px] flex flex-col">
      <div className="flex flex-col w-[1140px] h-[160px] gap-[10px]">
        <div className="flex flex-col items-center mx-auto w-[575px] h-[80px] gap-[12px]">
          <h4 className="text-[#6B7280] w-[95px] h-[24px] font-jakarta font-bold text-[16px] leading-[24px]">
            Integrations
          </h4>
          <h2 className="text-[#030712] w-[575px] h-[44px] font-bold font-jakarta text-[36px] leading-[44px] tracking-[-0.02em]">
            Integrate Polio with over 500 apps
          </h2>
        </div>
        <div className="w-[692px] h-[60px] mx-auto flex items-center justify-center">
          <p className="text-center text-[#6B7280] font-jakarta font-medium text-[20px] leading-[30px]">
            Polio CRM works seamlessly with your favourite apps. Use over 500
            tools and apps just by one click
          </p>
        </div>
      </div>

      <div className="w-[1140px] h-[285px] flex flex-col items-center justify-center">
        <div className="w-[163px] h-[80px] flex justify-center">
          <img src={Logo} alt="Logo" className="w-[163px] h-[80px]" />
        </div>

        <div className="w-[1044px] h-[100px]">
          <img src={Lines} alt="Lines" />
        </div>

        <div className="w-[1140px] h-[81px] flex justify-between ">
          <div className="w-[81px] h-[81px]">
            <img src={figma} alt="Figma" />
          </div>
          <div className="w-[81px] h-[81px]">
            <img src={zapier} alt="Zapier" />
          </div>
          <div className="w-[81px] h-[81px]">
            <img src={dropbox} alt="Dropbox" />
          </div>
          <div className="w-[81px] h-[81px]">
            <img src={intercom} alt="Intercom" />
          </div>
          <div className="w-[81px] h-[81px]">
            <img src={chimp} alt="Chimp" />
          </div>
          <div className="w-[81px] h-[81px]">
            <img src={notion} alt="Notion" />
          </div>
          <div className="w-[80px] h-[81px]">
            <img src={slack} alt="Slack" />
          </div>
          <div className="w-[81px] h-[81px]">
            <img src={drive} alt="Drive" />
          </div>
          <div className="w-[81px] h-[81px]">
            <img src={stripe} alt="Stripe" />
          </div>
          <div className="w-[81px] h-[81px]">
            <img src={zen} alt="Zen" />
          </div>
          <div className="w-[80px] h-[81px]">
            <img src={zapier} alt="Zapier" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Integrations