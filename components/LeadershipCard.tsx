export default function LeadershipCard({
  name,
  title,
  description,
}: {
  name: string;
  title: string;

  description: string;
}) {
  return (
    <div className="flex flex-col items-center p-6 text-center transition bg-white rounded-lg shadow-md hover:shadow-lg">
      {/* Avatar using regular <img> */}
      <img
        src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
          name
        )}`}
        alt={name}
        className="object-cover w-24 h-24 mb-4 border rounded-full"
      />

      <h3 className="mb-1 text-lg font-bold text-blue-900">{name}</h3>
      <p className="mb-2 text-sm italic text-gray-600">{title}</p>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
}
