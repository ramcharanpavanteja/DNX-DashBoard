import searchIcon from "../assets/icons/search.svg";
import categoryIcon from "../assets/icons/category.svg";
import popularIcon from "../assets/icons/sort.svg";
import settingIcon from "../assets/icons/setting-4.svg";
import menuIcon from "../assets/icons/menu.svg";
import notificationIcon from "../assets/icons/notification.svg";
import profileIcon from "../assets/avatars/profile.png";

export default function Header({ q, setQ, currentSection, setSidebarOpen }) {
  // hide explore + search on Overview & Settings
  const hideExplore = currentSection.toLowerCase() === "overview" || currentSection.toLowerCase() === "settings" || currentSection.toLowerCase() === "messages";

  return (
    <header className="flex flex-col w-full">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 md:px-7 md:py-3">
        {/* Mobile menu button */}
        <button onClick={() => setSidebarOpen(true)} className="md:hidden">
          <img src={menuIcon} alt="menu" className="w-6 h-6" />
        </button>
<h1 className="hidden md:block text-lg md:text-xl font-semibold">
  {["overview", "settings", "messages"].includes(
    currentSection.toLowerCase()
  )
    ? currentSection
    : `Explore ${currentSection}`}
</h1>
     
        {/* Right icons */}
        <div className="flex items-center gap-3 ml-auto">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border bg-white p-3">
            <img
              src={notificationIcon}
              alt="notification"
              className="w-full h-full cursor-pointer"
            />
          </div>
          <img
            src={profileIcon}
            alt="Profile"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full cursor-pointer"
          />
        </div>
      </div>

      <h1 className="block md:hidden text-lg font-semibold px-4 mt-2">
        {["overview", "settings", "messages"].includes(currentSection.toLowerCase())
              ? currentSection
              : `Explore ${currentSection}`}
      </h1>


      {!hideExplore && (
        <div className="flex items-center justify-between gap-3 px-2 py-6 md:px-4 md:pb-6">
          {/* Search */}
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder={`Search ${currentSection}`}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full pl-6 pr-6 py-2 rounded-md border bg-white border-neutral-200 placeholder:text-xs focus:outline-none"
            />
            <img
              src={searchIcon}
              alt="search"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4"
            />
          </div>

          {/* Desktop Filters */}
          <div className="hidden md:flex gap-3">
            <button className="flex items-center gap-2 px-5 py-3 rounded-md border bg-white border-neutral-200 text-xs font-medium">
              <img src={categoryIcon} alt="Category" className="w-4 h-4" />
              Category
            </button>
            <button className="flex items-center gap-2 px-5 py-3 rounded-md border bg-white border-neutral-200 text-xs font-medium">
              <img src={popularIcon} alt="Sort" className="w-4 h-4" />
              Sort by Popular
            </button>
          </div>

          {/* Mobile Settings */}
          <div className="md:hidden">
            <button className="p-2 rounded-md border border-neutral-200 bg-white">
              <img src={settingIcon} alt="Settings" className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
