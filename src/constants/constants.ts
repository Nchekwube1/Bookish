import { tabProps } from "./types";
import bookTab from "../assets/booktab.svg";
import homeTab from "../assets/hometab.svg";
import writerTab from "../assets/writertab.svg";
import searchTab from "../assets/search.svg";
export const tabItems: tabProps[] = [
    { image: homeTab, text: "home" },
    { image: bookTab, text: "books" },
    { image: writerTab, text: "authors" },
    { image: searchTab, text: "search" },
  ];