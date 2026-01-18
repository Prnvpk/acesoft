import Image from "next/image";
import { LuSettings2 } from "react-icons/lu";
import { MdAdsClick, MdDone, MdOutlinePhoneIphone } from "react-icons/md";

export const IOS = () => {
  return (
    <section
      className="max-w-7xl mx-auto py-12 md:py-16 px-4 md:px-6 min-h-screen"
      id="ios"
    >
      {/* Heading */}
      <div className="flex w-full justify-center my-8 md:my-10 mb-12 md:mb-20">
        <p className="text-[20px] md:text-[25px] font-bold text-center">
          iOS App Development
        </p>
      </div>

      <div className="space-y-16 md:space-y-20">
        {/* Top content + Image */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-5 items-center">
          {/* Left Content */}
          <div className="w-full md:flex-2">
            <h2 className="text-2xl md:text-4xl font-medium text-center md:text-left">
              Build Powerful & Elegant iOS Apps
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed text-center md:text-left">
              At Acesoft, we design and develop high-performance, secure, and
              user-friendly iOS applications tailored to your business needs.
              Our team specializes in creating visually stunning and smoothly
              functioning apps that deliver an exceptional experience on iPhones
              and iPads.
            </p>

            <ul className="mt-4 space-y-2 text-gray-700 text-center md:text-left">
              <li>✔ Custom iOS App Development</li>
              <li>✔ UI/UX Design Optimized for Apple Devices</li>
              <li>✔ App Performance Optimization</li>
              <li>✔ Secure and Scalable Solutions</li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="w-full md:flex-1 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/images/ios-1.jpeg"
              alt="iOS development"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Service Cards - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border rounded-lg p-4 space-y-2">
            <MdOutlinePhoneIphone size={22} />
            <div className="text-[12px] space-y-1">
              <p className="text-[13px] font-medium">
                Custom iOS App Development
              </p>
              <p>
                Scalable, tailor-made applications that align with your product
                vision.
              </p>
            </div>
          </div>

          <div className="border rounded-lg p-4 space-y-2">
            <LuSettings2 size={22} />
            <div className="text-[12px] space-y-1">
              <p className="text-[13px] font-medium">iOS UI/UX Design</p>
              <p>
                Intuitive, human-centered interfaces that feel native to the
                Apple ecosystem.
              </p>
            </div>
          </div>

          <div className="border rounded-lg p-4 space-y-2">
            <MdAdsClick size={22} />
            <div className="text-[12px] space-y-1">
              <p className="text-[13px] font-medium">iOS App Testing</p>
              <p>
                Rigorous testing to ensure performance, security, and stability
                across Apple devices.
              </p>
            </div>
          </div>

          <div className="border rounded-lg p-4 space-y-2">
            <MdDone size={22} />
            <div className="text-[12px] space-y-1">
              <p className="text-[13px] font-medium">Maintenance & Support</p>
              <p>
                Regular updates, performance tuning, and expert support to keep
                your app optimized.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
