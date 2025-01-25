import { SearchBar, LastWeekFiles, RecentFiles } from "@/components/videos";
import { VideoList } from "@/types/app";

export const metadata = {
  title: "HelpMeOut | Videos repository",
  description: "Videos repository",
};

const recents: VideoList = [
  {
    title: "How to create Facebook Ad listing",
    date: "SEPTEMBER 23, 2023",
    img: "/sample1.png",
  },
  {
    title: "How to create Facebook Ad listing",
    date: "SEPTEMBER 23, 2023",
    img: "/sample2.png",
  },
  {
    title: "How to create Facebook Ad listing",
    date: "SEPTEMBER 23, 2023",
    img: "/sample1.png",
  },
  {
    title: "How to create Facebook Ad listing",
    date: "SEPTEMBER 23, 2023",
    img: "/sample2.png",
  },
];
const lastweek: VideoList = [
  {
    title: "How to create Facebook Ad listing",
    date: "SEPTEMBER 23, 2023",
    img: "/sample1.png",
  },
  {
    title: "How to create Facebook Ad listing",
    date: "SEPTEMBER 23, 2023",
    img: "/sample2.png",
  },
  {
    title: "How to create Facebook Ad listing",
    date: "SEPTEMBER 23, 2023",
    img: "/sample1.png",
  },
  {
    title: "How to create Facebook Ad listing",
    date: "SEPTEMBER 23, 2023",
    img: "/sample2.png",
  },
];

function Videos() {
  return (
    <main>
      <SearchBar />
      <div className="container py-10 flex flex-col gap-12">
        <RecentFiles data={recents} />
        <LastWeekFiles data={lastweek} />
      </div>
    </main>
  );
}

export default Videos;
