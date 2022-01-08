import { Box, Text, Image, } from "@chakra-ui/react";
import {useDispatch,useSelector} from "react-redux"
import theme from "../../theme/theme";
import book from "../../assets/bookImg1.svg";
import bookTab from "../../assets/booktab.svg";
import homeTab from "../../assets/hometab.svg";
import writerTab from "../../assets/writertab.svg";
import searchTab from "../../assets/search.svg";
import { indexChange } from "./sideSlice";
import { AppDispatch, RootState } from "../../store";
import { Link } from "react-router-dom";
import "../../index.css";

export interface tabProps {
  image: string;
  text: string;
}

const tabItems: tabProps[] = [
  { image: homeTab, text: "home" },
  { image: bookTab, text: "books" },
  { image: writerTab, text: "authors" },
  { image: searchTab, text: "search" },
];
export default function Header() {
  const val = useSelector<RootState>(state=> state.sideSlice.index)
  const dispatch = useDispatch<AppDispatch>()
    function route(text:string) {
      if (text === "home") {
        return "/";
      }
      return text;
    }
    function setting(n: number) {
        dispatch(indexChange({
          index:n
        }))
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
            fontFamily={"heading"}
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
        {
          tabItems.map(({image,text},index)=>{
             return (
               <Box
               key={index}
                 position={"relative"}
                 width={"86%"}
                 display={"flex"}
                 borderRadius={"5px"}
                 alignItems={"center"}
                 paddingY={"10px"}
                 paddingX={"14px"}
                 cursor={"pointer"}
                 zIndex={200}
                 onClick={() => {
                   setting(index);
                 }}
                 className={index === val? "bg" : ""}
               >
                 <Link to={route(text)} className="link">
                   <Image
                     src={image}
                     alt={"Tab image"}
                     position={"relative"}
                     width={"18px"}
                     height={"18px"}
                     marginRight={"10px"}
                   />
                   <Text
                     color={"white"}
                     fontFamily={"monospace"}
                     textTransform={"capitalize"}
                     fontSize={"17px"}
                     textAlign={"center"}
                     paddingLeft={"6px"}
                   >
                     {text}
                   </Text>
                 </Link>
               </Box>
             );
          })
        }

          
        </Box>
      </Box>
    </>
  );
}
