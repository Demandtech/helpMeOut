import { SearchBar, LastWeekFiles, RecentFiles } from "@/components/videos";
import { VideoList } from "@/types/app";

export const metadata = {
  title: "HelpMeOut | Videos repository",
  description: "Videos repository",
};

const recents: VideoList = [
  {
    id: "1",
    title: "How to create Facebook Ad listing",
    date: "SEPTEMBER 23, 2023",
    img: "/sample1.png",
  },
  {
    id: "2",
    title: "How to create Facebook Ad listing",
    date: "SEPTEMBER 23, 2023",
    img: "/sample2.png",
  },
  {
    id: "3",
    title: "How to create Facebook Ad listing",
    date: "SEPTEMBER 23, 2023",
    img: "/sample1.png",
  },
  {
    id: "4",
    title: "How to create Facebook Ad listing",
    date: "SEPTEMBER 23, 2023",
    img: "/sample2.png",
  },
];

const lastweek: VideoList = [
  {
    id: "1",
    title: "How to create Facebook Ad listing",
    date: "SEPTEMBER 23, 2023",
    img: "/sample1.png",
  },
  {
    id: "2",
    title: "How to create Facebook Ad listing",
    date: "SEPTEMBER 23, 2023",
    img: "/sample2.png",
  },
  {
    id: "3",
    title: "How to create Facebook Ad listing",
    date: "SEPTEMBER 23, 2023",
    img: "/sample1.png",
  },
  {
    id: "4",
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
