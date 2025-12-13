export default function PrivacyPolicy() {
  return (
    <section className="w-full bg-white text-gray-800 py-16 px-6 md:px-20 lg:px-40">
      {/* Header */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0a1f44] mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Last Updated: {new Date().toLocaleDateString()}
        </p>

        {/* Introduction */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          At <strong>Bangash Containers</strong>, located at{" "}
          <strong>G14/1, Sirinagar Highway, Islamabad</strong>, we are committed
          to safeguarding your privacy and ensuring the security of your personal
          information. This Privacy Policy explains how we collect, use, and
          protect your data when you visit our website or contact us through our
          official communication channels.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-bold text-[#0a1f44] mt-10 mb-3">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 mb-4">
          We may collect the following types of information:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Personal Information:</strong> Name, phone number, email
            address, company details.
          </li>
          <li>
            <strong>Website Interaction Data:</strong> Pages visited,
            interactions, and preferences.
          </li>
          <li>
            <strong>Inquiry Details:</strong> Any information you share when
            requesting a quote or contacting us.
          </li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-2xl font-bold text-[#0a1f44] mt-10 mb-3">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-700 mb-4">
          The information we collect is used for the following purposes:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>To respond to inquiries or provide project quotations.</li>
          <li>To improve our website user experience.</li>
          <li>
            To communicate updates, promotions, or important business messages.
          </li>
          <li>To improve our products, services, and customer support.</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-bold text-[#0a1f44] mt-10 mb-3">
          3. How We Protect Your Information
        </h2>
        <p className="text-gray-700 mb-4">
          We implement strict security measures to ensure your personal data is
          protected from unauthorized access, loss, or misuse. Bangash Containers
          does <strong>not</strong> sell, trade, or share your personal details
          with third parties except when required by law.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-bold text-[#0a1f44] mt-10 mb-3">
          4. Cookies & Tracking Technologies
        </h2>
        <p className="text-gray-700 mb-4">
          Our website may use cookies and similar tools to enhance browsing
          experience and analyze site usage. You can disable cookies through your
          browser settings.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-bold text-[#0a1f44] mt-10 mb-3">
          5. Third-Party Links
        </h2>
        <p className="text-gray-700 mb-4">
          Our website may contain links to external websites. We are not
          responsible for the content or privacy practices of these third-party
          platforms.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-bold text-[#0a1f44] mt-10 mb-3">
          6. Your Rights
        </h2>
        <p className="text-gray-700 mb-4">
          You have the right to:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Access the personal information we hold about you.</li>
          <li>Request corrections to inaccurate or outdated data.</li>
          <li>Request deletion of your personal information.</li>
        </ul>

        {/* Section 7 */}
        <h2 className="text-2xl font-bold text-[#0a1f44] mt-10 mb-3">
          7. Contact Us
        </h2>
        <p className="text-gray-700 mb-4">
          For questions or concerns regarding this Privacy Policy, you may
          contact us at:
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

        {/* Footer Note */}
        <p className="text-gray-500 text-sm mt-12">
          By using our website, you agree to the terms outlined in this Privacy
          Policy.
        </p>
      </div>
    </section>
  );
}
