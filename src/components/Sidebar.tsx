import { Box, Text, Image, TabList, Tabs } from "@chakra-ui/react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import theme from "../theme/theme";
import book from "../assets/bookImg1.svg";
import bookTab from "../assets/booktab.svg";
import homeTab from "../assets/hometab.svg";
import writerTab from "../assets/writertab.svg";
import searchTab from "../assets/search.svg";
import Tab, { tabProps } from "./Sidetab";
const tabItems: tabProps[] = [
  { image: homeTab, text: "home" },
  { image: bookTab, text: "books" },
  { image: writerTab, text: "authors" },
  { image: searchTab, text: "search" },
];
export default function Header() {
  const [val, setVal] = useState<number>(0);
  function setting(n:number){
    setVal(n)
  }
  return (
    <>
      <Box
        position={"absolute"}
        left={0}
        top={0}
        zIndex={200}
        backgroundColor={theme.deepBlue}
        width={"18%"}
        height={"100vh"}
      >
        <Box
          position={"relative"}
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          marginBottom={"30px"}
        >
          <Image
            src={book}
            alt={"Icon image"}
            position={"relative"}
            width={"30px"}
            height={"30px"}
          />
          <Text
            color={"white"}
            fontFamily={"cursive"}
            textTransform={"capitalize"}
            fontSize={"20px"}
            textAlign={"center"}
            padding={"6px"}
          >
            Bookish
          </Text>
        </Box>
        <Box
          position={"relative"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          paddingTop={"25px"}
        >
          {tabItems.map(({ image, text }, index) => {
            return <Tab  key={index} image={image} text={text}  col={index === val? "bg":""} />;
          })}
        </Box>
      </Box>
    </>
  );
}
