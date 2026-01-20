import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Card from "../components/Card";
import Badge from "../components/Badge";


export default function RolePortals() {
  return (
    <section id="role-portals" className="py-20 bg-slate-700 z-10 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Role-Based Portals</h2>

      {/* Portal Cards */}
      <div className="max-w-6xl mx-auto px-6">
        <Swiper
          slidesPerView={1}
          loop={true}
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="h-400 md:h-100 lg:h-150 relative z-10"
        >
          <SwiperSlide className="h-full">
            <Card className="relative h-full flex flex-col justify-center overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url("/students.jpg")` }}
              ></div>
              {/* Overlay to dim the background */}
              <div className="absolute inset-0 bg-black/50 z-10"></div>

              {/* Content on top */}
              <div className="relative z-20 text-center text-white px-6">
                <h3 className="text-2xl font-bold mb-2">Student Portal</h3>
                <p className="mb-4">Manage applications, internships, and notifications.</p>
                <div className="flex justify-center gap-2">
                  <Badge text="Active" color="green" />
                  <Badge text="New" color="blue" />
                </div>
              </div>
          </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card className="relative h-full flex flex-col justify-center overflow-hidden">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ backgroundImage: `url("/agent.jpg")` }}
                ></div>
                {/* Overlay to dim the background */}
                <div className="absolute inset-0 bg-black/50 z-10"></div>

                {/* Content on top */}
                <div className="relative z-20 text-center text-white px-6">
                  <h3 className="text-2xl font-bold mb-2">Agent Portal</h3>
                  <p className="mb-4">Track students and commissions.</p>
                  <div className="flex justify-center gap-2">
                    <Badge text="Top Agent" color="blue" />
                    <Badge text="Pending" color="red" />
                  </div>
                </div>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card className="relative h-full flex flex-col justify-center overflow-hidden">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ backgroundImage: `url("/referral.jpg")` }}
                ></div>
                {/* Overlay to dim the background */}
                <div className="absolute inset-0 bg-black/50 z-10"></div>

                {/* Content on top */}
                <div className="relative z-20 text-center text-white px-6">
                  <h3 className="text-2xl font-bold mb-2">Affiliate Portall</h3>
                  <p className="mb-4">Referral tracking and performance.</p>
                  <div className="flex justify-center gap-2">
                    <Badge text="Clicks" color="gray" />
                    <Badge text="Leads" color="blue" />
                  </div>
                </div>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Director's Quote */}
      <div className="mt-20 max-w-4xl mx-auto text-center px-6">
        <img
          src="/director.png"  // replace with actual path
          alt="Director"
          className="mx-auto w-24 h-24 md:w-32 md:h-32 object-cover mb-4"
        />
        <p className="text-xl md:text-2xl italic text-slate-200 mb-4">
          "Our mission is to empower students, universities, and partners through seamless digital portals, ensuring clarity, efficiency, and opportunity for everyone involved."
        </p>
        <p className="font-semibold text-lg md:text-xl">Jane Doe</p>
        <p className="text-slate-400">Director, Talent Squad Europe</p>
      </div>
    </section>
  );
}
