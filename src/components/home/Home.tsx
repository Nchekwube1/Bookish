import {
  Box,
  Text,
  Input,
  Button,
  Image,
  Select,
  FormControl,
} from "@chakra-ui/react";
import {useQuery, useMutation} from "@apollo/client";
import {useDispatch,useSelector} from "react-redux"
import React, { useEffect, useState } from "react";
import add from "../../assets/add.svg";
import theme from "../../theme/theme";
import { AppDispatch, RootState } from "../../store";
import {setBook} from './homeSlice'
import { addBook, getBooks } from "../../queries/queries";
import { bookType } from "../../constants/types";


export default function Home() {
  const booksArray:bookType[] = useSelector((state:RootState)=> state.homeSlice.books)
  const dispatch = useDispatch<AppDispatch>()

  const { loading, error, data } = useQuery(getBooks)
  const [addTodo, response] = useMutation(addBook);
  useEffect(() => {
   if(!loading){
    dispatch(
      setBook({
         books: data.books
   })
  )
  console.log(booksArray)

   }
  },[data])
  const [addAuthor, setAddAuthor] = useState<boolean>(false);
  const [addGenre, setAddGenre] = useState<boolean>(false);
  const [title,setTitle] = useState<string>("")
  const [genre,setGenre] = useState<string>("")
  const [author,setAuthor] = useState<string>("")
  function formSubmit(e: React.FormEvent<HTMLFormElement>){
   e.preventDefault()
   console.log(title,genre,author);
  }
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
        <form className="form" onSubmit={formSubmit}>
          <FormControl isRequired>
            <Input
              placeholder="input book title"
              _focus={{ borderColor: theme.lightPurple }}
              fontFamily={"monospace"}
              value={title}
              onChange={(e)=> setTitle(e.target.value)}
            />
            {addAuthor ? (
              <Input
                placeholder="input author name"
                _focus={{ borderColor: theme.lightPurple }}
                my={"6px"}
                fontFamily={"monospace"}
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}
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
                value={genre}
                onChange={(e)=> setGenre(e.target.value)}
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
                >
                  {
                  }
                </Select>
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
          flexDir={"row"}
          px={"15px"}
          py={"25px"}
          flexWrap={"wrap"}
        >
       {!loading && booksArray.map((book)=>{
         return (
          <Box
          pos={"relative"}
          width={"180px"}
          height={"250px"}
          mx={'10px'}
          my={'20px'}
          backgroundColor={theme.deepBlue}
          borderRadius={"8px"}
          borderBottomLeftRadius={"20px"}
          boxShadow={"md"}
          key={book.title}
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
            <Text color={"white"} textTransform={"capitalize"} fontSize={"20px"}  fontFamily={"sans-serif"}>{book.title}</Text>
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
            pos={"relative"}
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            padding={"6px"}
            marginBottom={"12px"}
          >
            <Text  color={"white"} textTransform={"capitalize"} fontSize={"17px"}  fontFamily={"sans-serif"}width={'100%'} textAlign={'center'} >{book.author}</Text>
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
         )
       })}
        </Box>
      </Box>
    </Box>
  );
}
