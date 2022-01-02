import { Box, Text, Image } from "@chakra-ui/react";
import theme from "../theme/theme";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Book from "./book/Book";
import Search from "./search/Search";
import Author from "./author/Author";

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
