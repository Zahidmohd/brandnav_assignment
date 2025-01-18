import Image from "next/image";
import Button from "./Button";

const Features = () => {
  const data: { url: string; title: string; para: string }[] = [
    {
      url: "/ic1.svg",
      title: "Disposable email detection",
      para: `Verifier detects & removes temp emails for a clean, reliable list.`,
    },
    {
      url: "/ic2.svg",
      title: "Hard bounce prevention",
      para: `Efficiently eliminate undeliverable emails due to non-existent addresses.`,
    },
    {
      url: "/ic3.svg",
      title: "Soft bounce prevention",
      para: `Verifier spots soft bounce issues for successful email delivery.`,
    },
    {
      url: "/ic4.svg",
      title: "Email verification API",
      para: `Integrate our email verification software to remove inaccurate data.`,
    },
    {
      url: "/ic5.svg",
      title: "Catch-All email detection",
      para: `Detect and remove catch-all domains to assess your email risk.`,
    },
    {
      url: "/ic6.svg",
      title: "MX record validation",
      para: `Validate email authenticity with advanced MX record checks.`,
    },
    {
      url: "/ic7.svg",
      title: "SMTP provider identification",
      para: `Automatically identify email providers to enhance targeting..`,
    },
    {
      url: "/ic8.svg",
      title: "Email syntax validation",
      para: `Syntax check ensures only RFC-compliant emails remain.`,
    },
    {
      url: "/ic9.svg",
      title: "Email domain validation",
      para: `Confirm domain functionality with our verification process.`,
    },
    {
      url: "/ic10.svg",
      title: "SMTP verification",
      para: `Evaluate and analyse email deliverability for valuable insights.`,
    },
    {
      url: "/ic11.svg",
      title: "Anti-greylisting technology",
      para: `Trust Verifier for accurate email verification with anti-greylisting tech.`,
    },
    {
      url: "/ic12.svg",
      title: "Real-time results",
      para: `Track the real-time results of your email verification as we process the list.`,
    },
  ];
  return (
    <main className="max-container bg-[#09061A] relative overflow-hidden pt-[21.2rem] px-[1.6rem] md:px-[7rem]">
      <section className="flex gap-[2rem] flex-col lg:flex-row">
        {/* Description */}
        <div className="max-w-[31.8rem]">
          <h1 className="font-medium text-[5.2rem] leading-[112%] text-[#F0F0F0] w-full sm:max-w-[31.8rem]">
            Rock solid email verification
          </h1>
          <p className="text-[#E0E0E0] text-[1.8rem]   mt-[2.4rem] mb-[4rem]">
            Clean, optimize, and supercharge your email lists.
          </p>
          <Button title="Dive in!" textSize="text-[2rem]" />
        </div>

        {/* Features */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[2rem] flex-1  before:left-1/2
        relative before:absolute before:[box-shadow:0px_0px_400px_400px_rgba(35,0,102,.4)] 
      before:w-[.1rem] before:h-[.1rem]   before:top-[50%]  "
        >
          {data.map((ele) => (
            <div
              className="px-[1.8rem] py-[4.8rem] rounded-[1.6rem] border border-[#21305C]/60 
           [background-image:radial-gradient(at_top_left,#281E38,rgba(11,8,28,.7))] backdrop-blur-[1.2rem]
           [box-shadow:0px_0px_8px_rgba(8,0,62,.17),1px_2px_8px_rgba(0,0,0,.24)]"
            >
              <Image src={ele.url} alt="features icon" width={50} height={50} />
              <h1 className="font-medium text-[2rem] leading-[120%] text-[#F0F0F0] mt-[2.8rem] mb-[1.6rem]">
                {ele.title}
              </h1>
              <p className="text-[1.6rem] leading-[110%] text-[#E0E0E0]">
                {ele.para}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Features;
