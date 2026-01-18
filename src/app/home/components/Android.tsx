import Image from "next/image";
import { GrTest } from "react-icons/gr";
import { LuMousePointerClick, LuTextCursorInput } from "react-icons/lu";
import { RiBallPenLine } from "react-icons/ri";

export const Android = () => {
  return (
    <section
      className="max-w-7xl mx-auto py-12 md:py-16 px-4 md:px-6 min-h-screen"
      id="android"
    >
      {/* Heading */}
      <div className="flex w-full justify-center my-8 md:my-10 mb-12 md:mb-20">
        <p className="text-[20px] md:text-[25px] font-bold text-center">
          Android App Development
        </p>
      </div>

      <div className="space-y-16 md:space-y-20">
        {/* Top content + Image */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-5 items-center">
          {/* Left Content */}
          <div className="w-full md:flex-2">
            <h2 className="text-2xl md:text-4xl font-medium text-center md:text-left">
              Build Fast & Scalable Android Apps
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed text-center md:text-left">
              At Acesoft, we build high-performance, secure, and scalable Android
              applications tailored to your business goals. Our team designs
              intuitive user experiences and develops robust apps that perform
              seamlessly across a wide range of Android devices and versions.
            </p>

            <ul className="mt-4 space-y-2 text-gray-700 text-center md:text-left">
              <li>✔ Custom Android App Development</li>
              <li>✔ UI/UX Design for All Screen Sizes</li>
              <li>✔ Performance & Battery Optimization</li>
              <li>✔ Secure, Reliable, and Scalable Apps</li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="w-full md:flex-1 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/images/android-1.jpeg"
              alt="Android development"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Service Cards - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border rounded-lg p-4 space-y-2">
            <LuTextCursorInput size={22} />
            <div className="text-[12px] space-y-1">
              <p className="text-[13px] font-medium">
                Custom Android App Development
              </p>
              <p>
                Tailored Android solutions designed specifically to meet your
                business requirements.
              </p>
            </div>
          </div>

          <div className="border rounded-lg p-4 space-y-2">
            <RiBallPenLine size={22} />
            <div className="text-[12px] space-y-1">
              <p className="text-[13px] font-medium">
                Android App UI/UX Design
              </p>
              <p>
                We create visually appealing and highly usable designs that
                enhance user engagement.
              </p>
            </div>
          </div>

          <div className="border rounded-lg p-4 space-y-2">
            <LuMousePointerClick size={22} />
            <div className="text-[12px] space-y-1">
              <p className="text-[13px] font-medium">
                Android App Porting & Upgradation
              </p>
              <p>
                Keep your app up-to-date with the latest Android versions and
                features.
              </p>
            </div>
          </div>

          <div className="border rounded-lg p-4 space-y-2">
            <GrTest size={22} />
            <div className="text-[12px] space-y-1">
              <p className="text-[13px] font-medium">App Testing & Launch</p>
              <p>
                Comprehensive testing to ensure your app is stable, secure, and
                market-ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
