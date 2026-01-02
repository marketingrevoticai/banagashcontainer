export default function RefundPolicy() {
  return (
    <section className="w-full bg-white text-gray-800 py-16 px-6 md:px-20 lg:px-40">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0a1f44] mb-6">
          Refund Policy
        </h1>

        <p className="text-sm text-gray-500 mb-10">
          Last Updated: {new Date().toLocaleDateString()}
        </p>

        {/* Intro */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          At <strong>Bangash Containers</strong>, we aim to deliver high-quality
          prefabricated container structures that meet customer expectations.
          This Refund Policy outlines the conditions under which refunds may be
          issued for deposits, project payments, or service fees.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-bold text-[#0a1f44] mt-10 mb-3">
          1. Advance Payments (Non-Refundable)
        </h2>
        <p className="text-gray-700 mb-4">
          All advance payments, booking fees, or initial deposits made to begin a
          project are <strong>non-refundable</strong>. This is because project
          planning, material allocation, and resource scheduling begin
          immediately after confirmation.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-bold text-[#0a1f44] mt-10 mb-3">
          2. Refunds Before Production Starts
        </h2>
        <p className="text-gray-700 mb-4">
          If you cancel a project before the fabrication or material procurement
          has started, partial refunds <strong>may</strong> be issued depending
          on:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Administrative work already completed</li>
          <li>Designing or planning hours invested</li>
          <li>Any materials already purchased</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-bold text-[#0a1f44] mt-10 mb-3">
          3. No Refund After Production Begins
        </h2>
        <p className="text-gray-700 mb-4">
          Once fabrication, welding, installation, design execution, or material
          procurement begins, <strong>no refunds</strong> will be provided, as
          production costs are irrecoverable.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-bold text-[#0a1f44] mt-10 mb-3">
          4. Quality Issues & Adjustments
        </h2>
        <p className="text-gray-700 mb-4">
          If a customer identifies any legitimate quality concerns, we offer:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Free adjustments (where applicable)</li>
          <li>Repairs or corrections under warranty terms</li>
          <li>Replacement of faulty components if covered</li>
        </ul>
        <p className="text-gray-700 mt-3">
          Refunds are <strong>not</strong> issued for quality concerns unless
          Bangash Containers fails to meet the agreed specifications after
          reasonable attempts at correction.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-bold text-[#0a1f44] mt-10 mb-3">
          5. Custom & Modified Orders (Strictly Non-Refundable)
        </h2>
        <p className="text-gray-700 mb-4">
          Any custom-built container units, unique designs, or specially
          fabricated structures are <strong>strictly non-refundable</strong>.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-bold text-[#0a1f44] mt-10 mb-3">
          6. Refund Processing Time
        </h2>
        <p className="text-gray-700 mb-4">
          Approved refunds will be processed within{" "}
          <strong>7–14 business days</strong>. Refunds are made only via the
          original payment method.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-bold text-[#0a1f44] mt-10 mb-3">
          7. Contact for Refund Requests
        </h2>
        <p className="text-gray-700 mb-4">
          For refund-related questions or to initiate a request, contact us at:
        </p>

        <div className="text-gray-800 space-y-1">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@bangashcontainers.com"
              className="text-blue-600 underline"
            >
              info@bangashcontainers.com
            </a>
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+923115269897" className="text-blue-600 underline">
              +92 311 5269897
            </a>
          </p>

          <p>
            <strong>Address:</strong> G14/1, Sirinagar Highway, Islamabad
          </p>
        </div>

        <p className="text-gray-500 text-sm mt-12">
          By making a purchase or booking a project, you agree to the terms
          outlined in this Refund Policy.
        </p>
      </div>
    </section>
  );
}
