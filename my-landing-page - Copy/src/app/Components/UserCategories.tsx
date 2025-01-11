import { Users2, Monitor, Briefcase, Radio, Link, LineChart } from "lucide-react";

export default function UserCategories() {
  const categories = [
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Sales & Marketing Teams",
      description:
        "Sales and marketing teams are using BrandNav to efficiently locate and verify prospect contact information and identify key decision-makers.",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Software & IT Companies",
      description:
        "IT companies are using BrandNav to build lists for outreach, identify target organizations, and verify email addresses of leads to improve email deliverability.",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Service Providers",
      description:
        "Service providers are using BrandNav to locate accurate email addresses, build a list of contacts, and improve the efficiency of their sales process.",
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Recruiters",
      description:
        "Recruiters are using BrandNav to locate and verify the email addresses of job candidates, build a talent pool, and streamline their hiring process.",
    },
    {
      icon: <Link className="w-8 h-8" />,
      title: "Backlinks Outreach",
      description:
        "SEO link builders are using BrandNav to locate and verify the email addresses of potential link partners, and build outreach lists for link-building purposes.",
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Investors",
      description:
        "Investors are using BrandNav to quickly find and verify contact information for key executives and decision-makers and streamline their workflow.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#EFF2F7] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-[28px] font-bold text-[#2A2665] mb-2  max-w-2xl mx-auto text-left sm:text-center">
            Who is using BrandNav?
          </h2>
          <p className="text-[15px] lg:text-md md:text-md text-[#6B7280] max-w-2xl mx-auto text-left sm:text-center">
            BrandNav has become an irreplaceable tool for businesses
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="border-none shadow-none bg-transparent"
            >
              <div className="flex flex-col sm:items-center items-start text-left sm:text-center p-6">
                <div className="w-16 h-16 bg-[#3B82F6] text-white rounded-2xl flex items-center justify-center mb-6">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#2A2665] mb-3">
                  {category.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
