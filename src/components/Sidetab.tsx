import { Box, Text, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Link, Route } from "react-router-dom";

export interface tabProps {
  image: string;
  text: string;
}
export interface Props {
  image: string;
  text: string;
  col:string;
}
export default function SideTab({ image, text, col}: Props) {
  function route() {
    if (text === "home") {
      return "/";
    }
    return text;
  }
  return (
    <Box
      position={"relative"}
      width={"86%"}
      display={"flex"}
      borderRadius={"5px"}
      alignItems={"center"}
      paddingY={"10px"}
      paddingX={"14px"}
      cursor={"pointer"}
      className={col}
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
