export default function VisionPage() {
  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">
        Our Vision & Mission
      </h1>
      <div className="grid md:grid-cols-2 gap-8 text-gray-700">
        <div>
          <h2 className="text-xl font-semibold text-blue-900 mb-2">Mission</h2>
          <p>
            Our mission is to connect the world’s fleets with the heart and
            skill of Filipino seafarers by delivering ethical, people-first
            crewing solutions. We are committed to the highest standards of
            integrity, safety, and service—empowering seafarers, supporting
            their families, and building long-term partnerships based on trust
            and shared success.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-blue-900 mb-2">Vision</h2>
          <p>
            Our vision is to shape a maritime future where Filipino seafarers
            are celebrated not just for their excellence, but for the values
            they bring to every voyage. Crewing becomes a commitment to human
            dignity, professional growth, and a more inclusive and sustainable
            global maritime industry.
          </p>
        </div>
      </div>
    </div>
  );
}
