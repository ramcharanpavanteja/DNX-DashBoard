import jessica from "/jessica.png";
import lincon from "/lincon.png";
import alex from "/alex.png";
import julia from "/julia.png";
import george from "/george.png";
import anna from "/anna.png";
import andrie from "/andrie.png";
import webdevelopment from "/web_development.jpg";
import appdevelopment from "/mobile-developer.png";
import ui_ux from "/ui_ux.jpg";
import clock from "../assets/icons/clock.svg";

export default function TaskCard({ task }) {
const  avatarMap = {
    jessica,
    lincon,
    alex,
    julia,
    andrie,
    george,
    anna
  }

const thumbnailMap = {
  webdevelopment,
  appdevelopment,
  ui_ux,
};

const formatDuration = (minutes) => {
    if (minutes < 60) return `${minutes} min`;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m > 0 ? `${h}h ${m}m` : `${h}h`;
};
return (
    <div className="bg-white rounded-xl shadow-sm border p-4 min-w-[280px]">

        {/* Thumbnail */}
        <img
          src={thumbnailMap[task.thumbnail]} 
          alt={task.thumbnail}
          className="w-full h-32 object-cover rounded-xl"
        />

        {/* Title & Role/Category */}
        <div className="mt-3 w-full">
          <h3 className="text-sm font-semibold text-gray-800">{task.title}</h3>
          {task.role && <p className="text-xs text-gray-500">{task.role}</p>}
          
        </div>

        {/* Progress */}
        <div className="mt-3">
          <div className="flex justify-between mb-1">
             <p className="text-sm text-gray-600 mb-1 font-medium">Progress</p>
            <p className="text-sm text-right font-medium text-indigo-500 mb-1">
              {task.progress}%
            </p>
          </div>
          
          <div className="w-full bg-blue-200 h-2 rounded-full">
            
              <div className="h-2 bg-blue-500 rounded-full flex justify-end items-center gap-4"
                style={{ width: `${task.progress}%` }}>
                  <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>
              </div>
          </div>
         
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-3 text-sm font-medium text-gray-900">
          {/* Time */}
          <div className="flex items-center gap-1">
            <img src={clock} alt="clock" className="w-4 h-4" />
            <span>{formatDuration(task.durationMinutes)}</span>
          </div>

        {/* Members */}
        <div className="flex -space-x-2">
          {task.people.slice(0, 5).map((p, i) => (
            <img
              key={i}
            src={avatarMap[p]} // e.g. mentor.avatar = "jessica"
              alt="member"
              className="w-6 h-6 rounded-full border border-white"
            />
          ))}
          {task.people.length > 5 && (
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-[10px] text-gray-700 border border-white">
              +{task.people.length - 5}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
