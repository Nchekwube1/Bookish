import { Box, Text, Image } from "@chakra-ui/react";
import { useState } from "react";
import theme from "../theme/theme";
import { Link, Route } from "react-router-dom";

export interface tabProps {
  image: string;
  text: string;
}
export interface Props {
  image: string;
  text: string;
  index: number;
}
export default function SideTab({ image, text, index }: Props) {
  const [val, setVal] = useState<number>(0);
  function bg() {
    if (index !== val) {
      return theme.deepBlue;
    }
    return theme.lightPurple;
  }
  function route() {
    if (text === "home") {
      return "/";
    }
    return text;
  }
  return (
    <Box
      // onClick={() => {
      //   setVal(index);
      // }}
      on
      position={"relative"}
      width={"86%"}
      display={"flex"}
      borderRadius={"5px"}
      alignItems={"center"}
      paddingY={"10px"}
      paddingX={"14px"}
      backgroundColor={bg()}
      _hover={{ backgroundColor: theme.lightPurple }}
      _selected={{ backgroundColor: theme.lightPurple }}
      cursor={"pointer"}
    >
      <Link to={route()} className="link">
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
          fontFamily={"fantasy"}
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
}
