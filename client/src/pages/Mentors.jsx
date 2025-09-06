import { useEffect, useState } from "react";
import MentorCard from "../components/MentorCard.jsx";
import leftArrowIcon from "../assets/icons/arrow-left.svg";
import rightArrowIcon from "../assets/icons/arrow-right.svg";
import { useRef } from "react";

const API = import.meta.env.VITE_API_URL || "http://localhost:8081";

export default function Mentors({ q }) {
  const [mentors, setMentors] = useState([]);
  const scrollRef = useRef(null);

  // Fetch all mentors once
  useEffect(() => {
    fetch(`${API}/api/mentors`)
      .then((res) => res.json())
      .then((data) => setMentors(data.mentors || []))
      .catch((err) => console.error("Error fetching mentors:", err));
  }, []);

  const filtered = mentors.filter((m) =>
    m.name.toLowerCase().includes(q.toLowerCase())
  );

  const recent = filtered.filter((m) => m.recent === true);
  const all = filtered; 
  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -470, behavior: "smooth" });
  };
  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 470, behavior: "smooth" });
  };
  return (
    <div className="p-4 md:p-7 rounded-lg">
      {/* Recent Mentors */}
      <section>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Recent Mentors</h2>
          <div className="flex gap-2">
            <button onClick={scrollLeft} className="p-2">
              <img src={leftArrowIcon} alt="Left" className="w-4 h-4" />
            </button>
            <button onClick={scrollRight} className="p-2">
              <img src={rightArrowIcon} alt="Right" className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide mt-3 scroll-smooth"
        >
          {recent.length > 0 ? (
            recent.map((m) => (
              <div key={m._id} className="min-w-[328px] sm:min-w-[328px] md:min-w-[328px]"> 
                <MentorCard mentor={m} showDescription={false} />
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">No recent mentors found.</p>
          )}
        </div>
      </section>

      {/* All Mentors */}
      <section className="mt-6">
        <h2 className="text-lg font-semibold">All Mentors</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
          {all.length > 0 ? (
            all.map((m) => <MentorCard key={m._id} mentor={m} showDescription={true}  />)
          ) : (
            <p className="text-sm text-gray-500">No mentors found.</p>
          )}
        </div>
      </section>
    </div>
  );
}
