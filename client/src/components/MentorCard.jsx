import jessica from "/jessica.png";
import lincoln from "/lincon.png";
import alex from "/alex.png";
import julia from "/julia.png";
import george from "/george.png";
import anna from "/anna.png";
import andrie from "/andrie.png";
import taskIcon from "../assets/icons/note-2.svg";

export default function MentorCard({ mentor,showDescription }) {

const  avatarMap = {
    jessica,
    lincoln,
    alex,
    julia,
    andrie,
    george,
    anna
  }
  return (
    <div className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <img
            src={avatarMap[mentor.avatar]} // e.g. mentor.avatar = "jessica"
            alt={mentor.avatar}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-sm font-semibold">{mentor.name}</h2>
            <p className="text-xs text-gray-500">{mentor.role}</p>
          </div>
        </div>
        <button className="text-xs font-medium text-blue-600">
          {mentor.followed ? "Followed" : "+ Follow"}
        </button>
      </div>
      {showDescription && mentor.bio && (
        <p className="text-xs text-gray-600 mb-3">{mentor.bio}</p>
      )}
      <div className="flex items-center  justify-between gap-3 text-xs font-medium ">
        <div className="flex items-center gap-1">
          <img src={taskIcon} alt="task" className="w-4 h-4"/>
          <span>{mentor.tasksCount} Task</span>
        </div>
        <div>
          <span>⭐ {mentor.rating} ({mentor.reviews} Reviews)</span>
        </div>
      </div>
    </div>
  );
}