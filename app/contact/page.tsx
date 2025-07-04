export default function ContactPage() {
  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="space-y-4">
        <input placeholder="Name" className="w-full p-2 border rounded" />
        <input placeholder="Email" className="w-full p-2 border rounded" />
        <textarea
          placeholder="Message"
          className="w-full p-2 border rounded"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-700 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </form>
      <div className="mt-10 text-gray-600">
        <p>Email: crewing@lt-marine.com</p>
        <p>Phone: +63 286 453468</p>
        <p>
          Address: 4/F Five E-Com Center, Palm Coast Ave. Corner Pacific Drive,
          Mall of Asia Complex, Pasay City
        </p>
      </div>
    </div>
  );
}
