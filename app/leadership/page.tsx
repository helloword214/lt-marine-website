import LeadershipCard from "@/components/LeadershipCard";

const leaders = [
  {
    name: "Capt. Norrel Tapia",
    title: "Marine Operations Superintendent, DPA/CSO",
    description:
      "Capt. Tapia has sailed with Jo, Broström, and Maersk Tankers, and served as captain for Furetank Rederi AB. He was the first Filipino captain in FT’s Vinga Series Fleet. He is highly experienced in Oil Major Vetting, Port State, and CDI Inspections, and actively contributes to maritime seminars.",
  },
  {
    name: "C.E. Genesis Pelagio",
    title: "Technical Superintendent, Chief Engineer – Oil-Chem Vessels",
    description:
      "Chief Engineer Pelagio has extensive experience across LPG, Heavy Lift, and Cargo vessels. He is a Maritime Academy Instructor, certified training facilitator, Marine Surveyor, and Internal Auditor focused on training quality and compliance.",
  },
  {
    name: "C.E. Elizsa Chomi",
    title: "Chief Engineer – Oil/Chemical Vessels",
    description:
      "C.E. Chomi has sailed since 2009 with Laurin Maritime, Synergy Group, and Unitankers. A panelist with AMOSUP, PCG, ITF, ILO, and IMO, she is the first female MAAP Chief Engineer graduate and an advocate of inclusive maritime excellence.",
  },
  {
    name: "Capt. Rhey Calayo",
    title: "Marine Superintendent / Compliance Specialist",
    description:
      "Capt. Calayo has managed crew training and regulatory compliance, and served as Marine Superintendent, Surveyor, and MARINA panel expert. He is also pursuing a Master’s in Ship Management at PMMA.",
  },
  {
    name: "Diane Tapia",
    title: "Maritime Executive / Crew Operations Strategist",
    description:
      "Diane has led high-performance crew operations teams and is COO of Vesa Ship Management Inc. She brings innovation, efficiency, and leadership to every crewing solution.",
  },
];

export default function LeadershipPage() {
  return (
    <div className="max-w-6xl p-10 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-center">Our Leadership</h1>
      <p className="max-w-3xl mx-auto mb-8 text-center text-gray-700">
        Our team is composed of seasoned captains, chief engineers, and maritime
        professionals with firsthand experience in international shipping
        operations. Their leadership ensures that every placement and service
        reflects a deep understanding of seafaring life and industry
        expectations.
      </p>
      <h1 className="mb-6 text-3xl font-bold text-center">Leaders</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {leaders.map((leader, index) => (
          <LeadershipCard
            key={index}
            name={leader.name}
            title={leader.title}
            description={leader.description}
          />
        ))}
      </div>
    </div>
  );
}
