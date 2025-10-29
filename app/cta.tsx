import Image from "next/image"
import * as motion from "motion/react-client";
import Link from "next/link";


export default function CallToAction() {
  return (
    <div className="full-width-container">
      <div className="content-width-full pt-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5">
          <div className="grow space-y-3 text-xl">
            <h3 className="text-3xl font-serif">Start Your Modernization Journey — With a Free Expert Code Review</h3>
            <p>
              I invite you to book a call with me so that I can better understand your needs. I will gladly perform a free code review of your existing application and create a report with key recommendations. After reviewing my report, if you would like to move forward with my services, you can hire me for my contract rate of CA$90 / hour.
            </p>
            <p>
              Taking the first step may seem daunting, but staying on your current path is also risky. Without modernizing your stack, your backlog continues to grow and dissatisfaction mounts. Let me help you build a new solution that delights your end users and keeps up with business demands.
              You will breathe a sigh of relief when you ditch the legacy system once and for all.
            </p>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-center text-cyan-600 font-bold py-3 text-3xl">
                <Link href="/contact">👉 Book a call with me today!</Link>
              </p>
            </motion.div>
          </div>
          <div className="lg:w-128 flex-none">
            <Image
              src="/smiling_man.jpg"
              alt="Mockup of the MemberPlus application"
              width={1000}
              height={667}
              className="lg:float-right rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}