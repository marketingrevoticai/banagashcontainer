export default function TermsAndConditions() {
  return (
    <section className="w-full bg-white text-gray-800 py-16 px-6 md:px-20 lg:px-40">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0a1f44] mb-6">
          Terms & Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Last Updated: {new Date().toLocaleDateString()}
        </p>

        {/* Introduction */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Welcome to <strong>Bangash Containers</strong>. By accessing or using
          our website, products, or services, you agree to comply with the
          following Terms & Conditions. Please read them carefully before
          proceeding.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-bold text-[#0a1f44] mt-10 mb-3">
          1. Use of Website
        </h2>
        <p className="text-gray-700 mb-4">
          All content on this website—including text, images, graphics, and
          designs—is the property of Bangash Containers. You may not copy,
          reuse, modify, or distribute any material without written permission.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-bold text-[#0a1f44] mt-10 mb-3">
          2. Service & Product Information
        </h2>
        <p className="text-gray-700 mb-4">
          We strive to provide accurate information regarding our prefabricated
          container solutions, designs, and services. However, specifications may
          vary depending on project requirements. Bangash Containers reserves the
          right to update product details anytime without prior notice.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-bold text-[#0a1f44] mt-10 mb-3">
          3. Quotes & Pricing
        </h2>
        <p className="text-gray-700 mb-4">
          All project quotations shared via email or phone are estimates based on
          available information. Final pricing may change depending on material
          cost, customization, transportation, or technical adjustments.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-bold text-[#0a1f44] mt-10 mb-3">
          4. Payments
        </h2>
        <p className="text-gray-700 mb-4">
          Payments must be made according to the schedule provided in the agreed
          quotation or contract. Advance payments are non-refundable unless stated
          otherwise.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-bold text-[#0a1f44] mt-10 mb-3">
          5. Project Delivery
        </h2>
        <p className="text-gray-700 mb-4">
          Delivery timelines are provided based on current workload and material
          availability. Delays caused by weather, transportation issues, or
          external factors are not the responsibility of Bangash Containers.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-bold text-[#0a1f44] mt-10 mb-3">
          6. Warranty & Liability
        </h2>
        <p className="text-gray-700 mb-4">
          Our container structures include warranty only as specified in the
          project contract. We are not liable for damage caused by misuse,
          unauthorized modifications, or lack of maintenance.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-bold text-[#0a1f44] mt-10 mb-3">
          7. Third-Party Links
        </h2>
        <p className="text-gray-700 mb-4">
          External links on our website may redirect to third-party platforms.
          Bangash Containers is not responsible for their content, accuracy, or
          policies.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-bold text-[#0a1f44] mt-10 mb-3">
          8. Changes to These Terms
        </h2>
        <p className="text-gray-700 mb-4">
          Bangash Containers may revise or update these Terms & Conditions at any
          time. Continued use of our website means you accept these changes.
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl font-bold text-[#0a1f44] mt-10 mb-3">
          9. Contact Us
        </h2>
        <p className="text-gray-700 mb-4">If you have questions, contact us:</p>

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
          By using this website, you agree to these Terms & Conditions.
        </p>
      </div>
    </section>
  );
}
