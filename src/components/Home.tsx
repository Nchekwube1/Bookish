import {
  Box,
  Text,
  Input,
  Button,
  Image,
  Select,
  FormControl,
} from "@chakra-ui/react";
import add from "../assets/add.svg";
import theme from "../theme/theme";
import { useState } from "react";
export default function Home() {
  const [addAuthor, setAddAuthor] = useState<boolean>(false);
  const [addGenre, setAddGenre] = useState<boolean>(false);
  return (
    <Box
      position={"relative"}
      width={"100%"}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        pos={"relative"}
        width={"40%"}
        mt={"20px"}
        p={"40px"}
        backgroundColor={"gray.50"}
        borderRadius={"base"}
      >
        <form className="form">
          <FormControl isRequired>
            <Input
              placeholder="input book title"
              _focus={{ borderColor: theme.lightPurple }}
              fontFamily={"monospace"}
            />
            {addAuthor ? (
              <Input
                placeholder="input author name"
                _focus={{ borderColor: theme.lightPurple }}
                my={"6px"}
                fontFamily={"monospace"}
              />
            ) : (
              <Box
                pos={"relative"}
                width={"100%"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                my={"6px"}
              >
                <Select
                  placeholder="select author"
                  pos={"relative"}
                  width={"90%"}
                  _focus={{ borderColor: theme.lightPurple }}
                  fontFamily={"monospace"}
                ></Select>
                <Image
                  src={add}
                  alt={"add image"}
                  position={"relative"}
                  height={"25px"}
                  width={"8%"}
                  cursor={"pointer"}
                  onClick={() => setAddAuthor(true)}
                />
              </Box>
            )}
            {addGenre ? (
              <Input
                placeholder="input genre"
                _focus={{ borderColor: theme.lightPurple }}
                my={"6px"}
                fontFamily={"monospace"}
              />
            ) : (
              <Box
                pos={"relative"}
                width={"100%"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                my={"6px"}
              >
                <Select
                  placeholder="select genre"
                  pos={"relative"}
                  width={"90%"}
                  _focus={{ borderColor: theme.lightPurple }}
                  fontFamily={"monospace"}
                ></Select>
                <Image
                  src={add}
                  alt={"add image"}
                  position={"relative"}
                  height={"25px"}
                  width={"8%"}
                  cursor={"pointer"}
                  onClick={() => setAddGenre(true)}
                />
              </Box>
            )}
            <Button width={"100%"} colorScheme={"green"} type="submit">
              Add
            </Button>
          </FormControl>
        </form>
      </Box>
      <Box
        pos={"relative"}
        width={"100%"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
      >
        <Box pos={"relative"} my={"30px"}>
          <Text
            fontFamily={"heading"}
            fontSize={"21px"}
            textTransform={"capitalize"}
            _after={{
              content: `""`,
              position: "absolute",
              width: "50%",
              height: "5px",
              borderRadius: "3px",
              backgroundColor: theme.deepBlue,
              bottom: -1,
              right: 0,
              transform: "translateX(-50%)",
            }}
          >
            all books
          </Text>
        </Box>

        <Box
          pos={"relative"}
          width={"100%"}
          display={"flex"}
          flexDir={"column"}
          px={"15px"}
          flexWrap={"wrap"}
        >
          <Box
            pos={"relative"}
            width={"180px"}
            height={"250px"}
            backgroundColor={theme.deepBlue}
            borderRadius={"8px"}
            borderBottomLeftRadius={"20px"}
            boxShadow={"md"}
          >
            <Box
              pos={"relative"}
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              padding={"6px"}
              marginBottom={"12px"}
            >
              <Text color={"white"} textTransform={"capitalize"} fontSize={"20px"}  fontFamily={"sans-serif"}>Purple hibiscus</Text>
            </Box>
            <Box
              pos={"relative"}
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              padding={"6px"}
              marginBottom={"12px"}
            >
              <Text  color={"white"} textTransform={"capitalize"} fontSize={"17px"}  fontFamily={"sans-serif"}>by</Text>
            </Box>
            <Box
              pos={"absolute"}
              width={"174px"}
              height={"35px"}
              bottom={1}
              right={0}
              backgroundColor={theme.gray}
              borderLeftRadius={"300px"}
              borderBottomColor={theme.deepBlue}
              _after={{
                content: `""`,
                position: "absolute",
                bottom: 1,
                height: "1px",
                borderLeftRadius: "300px",
                right: 0,
                width: "165px",
                backgroundColor: "#ccc",
              }}
              _before={{
                content: `""`,
                position: "absolute",
                top: 1,
                height: "1px",
                borderLeftRadius: "300px",
                right: 0,
                width: "165px",
                backgroundColor: "#ccc",
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
