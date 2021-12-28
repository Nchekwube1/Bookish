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
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box pos={"relative"} width={"40%"} py={"20px"}>
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
    </Box>
  );
}
