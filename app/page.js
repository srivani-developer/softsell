
import { FaCloudUploadAlt, FaSearchDollar, FaMoneyCheckAlt, FaShieldAlt, FaClock, FaUsers, FaThumbsUp } from "react-icons/fa";


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to SoftSell</h1>
        <h4 className="text-2xl md:text-5xl font-semibold mb-4">
          Sell Unused Software Licenses with Ease
        </h4>
    
        <button className=" bg-blue-600 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-xl transition duration-300">
          Sell My Licenses
        </button>
      </section>                                    

      {/* How It Works Section */}
      <section className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <FaCloudUploadAlt className="text-blue-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Upload License</h3>
            <p className="text-gray-600">
              Submit your software license details through our secure form.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaSearchDollar className="text-green-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Get Valuation</h3>
            <p className="text-gray-600">
              We assess the value based on license type, usage, and demand.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaMoneyCheckAlt className="text-yellow-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Get Paid</h3>
            <p className="text-gray-600">
              Accept the offer and receive payment via your preferred method.
            </p>
          </div>
        </div>
      </section>
    

 { /* Why Choose Us Section */}
      <section className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">
            <FaShieldAlt className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-lg font-semibold  text-black dark:text-black mb-2">Secure Process</h3>
            <p className="text-gray-600">Your license data is encrypted and handled with care.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">
            <FaClock className="text-purple-600 text-4xl mb-4" />
            <h3 className="text-lg font-semibold  text-black dark:text-black mb-2">Quick Valuation</h3>
            <p className="text-gray-600">Get a price estimate within minutes of uploading.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">
            <FaUsers className="text-teal-600 text-4xl mb-4" />
            <h3 className="text-lg font-semibold  text-black dark:text-black mb-2">Trusted by Users</h3>
            <p className="text-gray-600">Join 1,000+ customers who have sold with confidence.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">
            <FaThumbsUp className="text-green-600 text-4xl mb-4" />
            <h3 className="text-lg font-semibold  text-black dark:text-black mb-2">Best Value</h3>
            <p className="text-gray-600">We ensure you get the highest possible payout.</p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
<section className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white py-20 px-6">
  <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    
    {/* Testimonial 1 */}
    <div className="bg-gray-50 p-6 rounded-xl shadow">
      <p className="text-gray-700 italic mb-4">
        “SoftSell made the whole process super simple. I uploaded my license and got paid within 24 hours!”
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center font-bold text-blue-700">
          A
        </div>
        <div>
          <p className="font-semibold text-black dark:text-black">Alex Kemlin</p>
          <p className="text-sm text-gray-500">IT Manager, NefCore Inc.</p>
        </div>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-gray-50 p-6 rounded-xl shadow">
      <p className="text-gray-700 italic mb-4">
        “Selling my unused licenses through SoftSell was fast, safe, and completely hassle-free.”
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center font-bold text-green-700">
          S
        </div>
        <div>
          <p className="font-semibold text-black dark:text-black">Sara Joseph</p>
          <p className="text-sm text-gray-500">CTO, BrainLee.</p>
        </div>
      </div>
    </div>

  </div>
</section>
{/* Contact / Lead Form Section */}
<section className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white py-20 px-6">
  <h2 className="text-3xl font-bold text-center mb-10">Get in Touch</h2>
  <form className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow space-y-6">
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium mb-1 text-black dark:text-black">Name</label>
        <input
          type="text"
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-black dark:text-black">Email</label>
        <input
          type="email"
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium mb-1 text-black dark:text-black">Company</label>
      <input
        type="text"
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label className="block text-sm font-medium mb-1 text-black dark:text-black">License Type</label>
      <select
        required
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-black"
      >
        <option value="">Select License</option>
        <option value="windows">Windows</option>
        <option value="office">Microsoft Office</option>
        <option value="adobe">Adobe Suite</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium mb-1 text-black dark:text-black">Message</label>
      <textarea
        rows="4"
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Tell us more about your license..."
      />
    </div>
    <button
      type="submit"
      className="w-full bg-blue-600 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
    >
      Submit
    </button>
  </form>
</section>
  </main>
        );
        };

      