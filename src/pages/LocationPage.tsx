import location from "../assets/location.mp4";
import {
    FaMapMarkerAlt, FaShoppingBag, FaHospital, FaSchool,
    FaBuilding, FaTrafficLight, FaLaptopCode, FaBriefcase,
    FaBookOpen, FaClinicMedical, FaTrain, FaSubway,
    FaPlaneDeparture, FaRoad, FaStore
} from "react-icons/fa";
import LocationCategory from "../components/LocationCategory";

export default function LocationPage() {
    return (
        <section className="justify-center flex items-center h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 mt-10">

                {/* Video */}
                <div className="flex items-center justify-center col-span-2">
                    <video
                        src={location}
                        autoPlay
                        muted
                        loop
                        className="rounded-2xl shadow-lg w-full h-auto"
                    />
                </div>

                {/* Categories */}
                <div className="space-y-6 ">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        THE HEART OF CONNECTIVITY
                    </h2>

                    <LocationCategory
                        icon={FaMapMarkerAlt}
                        title="Connectivity"
                        placement="bottom"
                        items={[
                            { icon: FaRoad, label: "Ghodbunder Road", time: "27 minutes" },
                            { icon: FaTrain, label: "Thane Railway Station", time: "27 minutes" },
                            { icon: FaSubway, label: "Upcoming Metro Line 4 & 5", time: "15 minutes" },
                            { icon: FaPlaneDeparture, label: "Chatrapati Shivaji Airport", time: "45 minutes" },
                            { icon: FaPlaneDeparture, label: "Navi Mumbai Airport", time: "1 Hour" },
                        ]}
                    />

                    <LocationCategory
                        icon={FaBriefcase}
                        title="Business & Commercial Hubs"
                        placement="left"
                        items={[
                            { icon: FaBuilding, label: "Hiranandani Business Park", time: "3 minutes" },
                            { icon: FaTrafficLight, label: "Kapurbawdi Junction", time: "10 minutes" },
                            { icon: FaLaptopCode, label: "Mindspace Airoli", time: "15 minutes" },
                            { icon: FaBriefcase, label: "BKC", time: "40 minutes" },
                        ]}
                    />

                    <LocationCategory
                        icon={FaShoppingBag}
                        title="Retail & Entertainment"
                        placement="bottom"
                        items={[
                            { icon: FaShoppingBag, label: "Viviana Mall", time: "10 minutes" },
                            { icon: FaShoppingBag, label: "Korum Mall", time: "15 minutes" },
                            { icon: FaStore, label: "Hyperlocal Convenience", time: "20 minutes" },
                        ]}
                    />

                    <LocationCategory
                        icon={FaHospital}
                        title="Healthcare"
                        placement="left"
                        items={[
                            { icon: FaHospital, label: "Jupiter Hospital", time: "5 minutes" },
                            { icon: FaClinicMedical, label: "Hiranandani Hospital", time: "20 minutes" },
                            { icon: FaHospital, label: "Bethany Hospital", time: "15 minutes" },
                        ]}
                    />

                    <LocationCategory
                        icon={FaSchool}
                        title="Education"
                        placement="bottom"
                        items={[
                            { icon: FaSchool, label: "Hiranandani Foundation School", time: "5 minutes" },
                            { icon: FaBookOpen, label: "Podar International School", time: "5 minutes" },
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}
