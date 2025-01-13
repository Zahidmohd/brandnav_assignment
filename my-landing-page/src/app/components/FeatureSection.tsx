"use client";
import CreditCard from "../../../public/credit_card.svg";
import Ratings from "../../../public/rating-star.svg";
import Image from "next/image";
import Feature1 from "../../../public/feature-1.svg";
import feature11 from "../../../public/feature-11.svg";
import feature12 from "../../../public/feature-12.svg";
import Feature2 from "../../../public/feature-2.svg";
import db from "../../../public/db.svg";
import feature21 from "../../../public/feature-21.svg";
import feature3 from "../../../public/feature-3.svg";
import filter from "../../../public/filters.svg";

export default function FeatureSection() {
  return (
    <section className="bg-[#F8F7FF] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A2665] mb-4">
            Why should you use BrandNav?
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Optimize your workflow for faster results and higher revenue.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Enrich CSV Feature */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#2A2665] mb-2">Enrich any CSV</h3>
            <p className="text-[#6B7280] leading-relaxed text-lg mb-6">
              BrandNav transforms your CSV files by adding valuable contact,
              firmographics, and technographics data. Enhance your data with
              enriched information to unlock new insights and opportunities.
            </p>
          </div>

          <div className="relative">
            <Image
              src={Feature1}
              alt="CSV Enrichment Interface"
              height={500}
              width={500}
              className="rounded-lg"
            />
            <div className="absolute flex gap-4 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
              <Image
                src={feature11}
                alt=""
                height={180}
                width={180}
                className="rounded-lg"
              />
              <Image
                src={feature12}
                alt=""
                height={180}
                width={180}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Fresh Data Updates Feature */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-6">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Image src={db} alt="Database Icon" className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#2A2665] mb-2">
                Fresh data updates everyday
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-lg mb-6">
                BrandNav updates its data every day, providing the most recent
                and accurate information for better decision-making.
              </p>
            </div>
            <div className="relative">
              <Image
                src={Feature2}
                alt="Fresh Data Updates Interface"
                height={500}
                width={500}
                className="rounded-lg"
              />
              <Image
                src={feature21}
                alt="Data Icon"
                height={150}
                width={150}
                className="absolute right-10 top-10 rounded-lg"
              />
            </div>
          </div>

          {/* Advanced Search Feature */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Image src={filter} alt="Filter Icon" className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#2A2665] mb-2">
              Advanced search with 25+ unique filters
            </h3>
            <p className="text-[#6B7280] leading-relaxed text-lg mb-6">
              Create highly targeted lists tailored to your needs, streamlining
              your workflow and maximizing productivity.
            </p>
          </div>
          <div className="relative">
            <Image
              src={feature3}
              alt="Advanced Search Interface"
              height={500}
              width={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
