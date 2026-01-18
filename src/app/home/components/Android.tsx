import Image from "next/image";
import { FaPenAlt } from "react-icons/fa";
import { GrTest } from "react-icons/gr";
import { LuMousePointerClick, LuTextCursorInput } from "react-icons/lu";
import { RiBallPenLine } from "react-icons/ri";

export const Android = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6 min-h-screen" id="android">
      <div className="items-center flex w-full justify-center my-10 mb-20">
        <p className="text-[25px] font-bold">Android App Development</p>
      </div>
      <div className="space-y-20">
        <div className="flex gap-5">
          <div className="flex-2">
            <h2 className="text-4xl font-medium">
              Build Fast & Scalable Android Apps
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              At Acesoft, we build high-performance, secure, and scalable
              Android applications tailored to your business goals. Our team
              designs intuitive user experiences and develops robust apps that
              perform seamlessly across a wide range of Android devices and
              versions.
            </p>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✔ Custom Android App Development</li>
              <li>✔ UI/UX Design for All Screen Sizes</li>
              <li>✔ Performance & Battery Optimization</li>
              <li>✔ Secure, Reliable, and Scalable Apps</li>
            </ul>
          </div>
          <div className="flex-1 relative">
            <Image
              src="/images/android-1.jpeg"
              alt="m"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex justify-center gap-10 z-20">
          <div className="border rounded-lg p-4 flex-1 space-y-2">
            <LuTextCursorInput />
            <div className="text-[12px] space-y-1">
              <p className="text-[13px] font-medium">
                Custom Android App Development
              </p>{" "}
              <p>
                At the heart of our services lies custom Android app
                development, tailored to meet the specific demands of your
                business.
              </p>
            </div>
          </div>
          <div className="border rounded-lg p-4 flex-1 space-y-2">
            <RiBallPenLine />
            <div className="text-[12px] space-y-1">
              <p className="text-[13px] font-medium">
                Android App UI/UX Design
              </p>{" "}
              <p>
                {" "}
                The success of mobile applications hinges on their usability and
                aesthetic appeal, which is why our Android app UI/UX design
                services are integral to our development process..
              </p>
            </div>
          </div>
          <div className="border rounded-lg p-4 flex-1 space-y-2">
            <LuMousePointerClick />

            <div className="text-[12px] space-y-1">
              <p className="text-[13px] font-medium">
                Android App Porting & Upgradation.
              </p>{" "}
              <p>
                {" "}
                Keeping up with the latest Android updates is crucial for app
                relevance and performance.
              </p>
            </div>
          </div>
          <div className="border rounded-lg p-4 flex-1 space-y-2">
            <GrTest />

            <div className="text-[12px] space-y-1">
              <p className="text-[13px] font-medium">App Testing & Launch.</p>{" "}
              <p>
                App Testing & Launch. Quality assurance is paramount, which is
                why our app testing and launch phase is comprehensive, ensuring
                that your Android app is bug-free, stable, and ready for the
                market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
