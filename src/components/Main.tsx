import { Box, Text, Image } from "@chakra-ui/react";
import theme from "../theme/theme";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Book from "./Book";
import Search from "./Search";
import Author from "./Author";

export default function Main() {
  return (
    <Box
      position={"absolute"}
      right={0}
      top={0}
      zIndex={200}
      backgroundColor={theme.theme}
      width={"82%"}
      minHeight={"100vh"}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="book" element={<Book />} />
        <Route path="search" element={<Search />} />
        <Route path="author" element={<Author />} />
      </Routes>
    </Box>
  );
}
