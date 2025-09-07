import { useEffect, useState, useRef } from "react";
import leftArrowIcon from "../assets/icons/arrow-left.svg";
import rightArrowIcon from "../assets/icons/arrow-right.svg";
import TaskCard from "../components/TaskCard.jsx";

const API = "https://dnx-dashboard.onrender.com";

export default function Tasks({ q }) {
  const [tasks, setTasks] = useState([]);
  const timeRef = useRef(null);
  const newRef = useRef(null);

  useEffect(() => {
    fetch(`${API}/api/tasks`)
      .then((res) => res.json())
      .then((data) => setTasks(data || []))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);
  // Filter by search
  const filtered = tasks.filter((t) =>
    t.title.toLowerCase().includes(q.toLowerCase())
  );


  const timeLimitTasks = filtered.filter((t) => t.section === "timelimit");
  const newTasks = filtered.filter((t) => t.section === "new");

  const scrollLeft = (ref) => {
    if (ref.current) ref.current.scrollBy({ left: -375, behavior: "smooth" });
  };
  const scrollRight = (ref) => {
    if (ref.current) ref.current.scrollBy({ left: 360, behavior: "smooth" });
  };

  return (
    <div className="p-4 md:p-7 rounded-lg">
      {/* Time Limit Section */}
      <section>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Time Limit</h2>
          <div className="flex gap-2">
            <button onClick={() => scrollLeft(timeRef)} className="p-2">
              <img src={leftArrowIcon} alt="Left" className="w-4 h-4" />
            </button>
            <button onClick={() => scrollRight(timeRef)} className="p-2">
              <img src={rightArrowIcon} alt="Right" className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={timeRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide mt-3 scroll-smooth"
        >
          {timeLimitTasks.length > 0 ? (
            timeLimitTasks.map((task) => (
              <div
                key={task._id}
                className="min-w-[328px] sm:min-w-[328px] md:min-w-[328px]"
              >
                <TaskCard task={task} />
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">No tasks found.</p>
          )}
        </div>
      </section>

      {/* New Task Section */}
      <section className="mt-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">New Task</h2>
          <div className="flex gap-2">
            <button onClick={() => scrollLeft(newRef)} className="p-2">
              <img src={leftArrowIcon} alt="Left" className="w-4 h-4" />
            </button>
            <button onClick={() => scrollRight(newRef)} className="p-2">
              <img src={rightArrowIcon} alt="Right" className="w-4 h-4" />
            </button>
          </div>
        </div>

         <div
          ref={newRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide mt-3 scroll-smooth"
        >
          {newTasks.length > 0 ? (
            newTasks.map((task) => (
              <div
                key={task._id}
                className="min-w-[328px] sm:min-w-[328px] md:min-w-[328px]"
              >
                <TaskCard task={task} />
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">No tasks found.</p>
          )}
        </div>
      </section>
    </div>
  );
}
