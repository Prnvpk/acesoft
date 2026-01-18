import Image from "next/image";
import { LuSettings2 } from "react-icons/lu";
import { MdAdsClick, MdDone, MdOutlinePhoneIphone } from "react-icons/md";

export const IOS = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6 h-screen" id="ios">
      <div className="items-center flex w-full justify-center my-10 mb-20">
        <p className="text-[25px] font-bold">IOS App Development</p>
      </div>
      <div className="space-y-20">
        <div className="flex gap-5">
          <div className="flex-2">
            <h2 className="text-4xl font-medium">
              Build Powerful & Elegant iOS Apps
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              At Acesoft, we design and develop high-performance, secure, and
              user-friendly iOS applications tailored to your business needs.
              Our team specializes in creating visually stunning and smoothly
              functioning apps that deliver an exceptional experience on iPhones
              and iPads.
            </p>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✔ Custom iOS App Development</li>
              <li>✔ UI/UX Design Optimized for Apple Devices</li>
              <li>✔ App Performance Optimization</li>
              <li>✔ Secure and Scalable Solutions</li>
            </ul>
          </div>
          <div className="flex-1 relative">
            <Image
              src="/images/ios-1.jpeg"
              alt="m"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex justify-center gap-10">
          <div className="border rounded-lg p-4 flex-1 space-y-2">
            <MdOutlinePhoneIphone />

            <div className="text-[12px] space-y-1">
              <p className="text-[13px] font-medium">
                Custom iOS App Development Launch
              </p>{" "}
              <p>
                {" "}
                scalable, tailor-made applications that align with your product
                vision.
              </p>
            </div>
          </div>
          <div className="border rounded-lg p-4 flex-1 space-y-2">
            <LuSettings2 />

            <div className="text-[12px] space-y-1">
              <p className="text-[13px] font-medium">iOS UI/UX Design</p>{" "}
              <p>
                {" "}
                Deliver intuitive, human-centered interfaces that feel native to
                the Apple ecosystem and delight users.
              </p>
            </div>
          </div>
          <div className="border rounded-lg p-4 flex-1 space-y-2">
            <MdAdsClick />
            <div className="text-[12px] space-y-1">
              <p className="text-[13px] font-medium">iOS App Testing</p>{" "}
              <p>
                {" "}
                Ensure flawless performance, security, and stability across all
                Apple devices through rigorous testing.
              </p>
            </div>
          </div>
          <div className="border rounded-lg p-4 flex-1 space-y-2">
            <MdDone />
            <div className="text-[12px] space-y-1">
              <p className="text-[13px] font-medium">Maintenance & Support</p>{" "}
              <p>
                {" "}
                Keep your app optimized and scalable with regular updates,
                performance tuning, and expert support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
