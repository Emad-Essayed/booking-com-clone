import {
  Stack,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  TextField,
  Container,
  Box,
} from "@mui/material";

import SvgIcon from "@mui/material/SvgIcon";
import { useState } from "react";
import CloseButton from "./CloseButton";

function HomeIcon(props) {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      sx={{
        margin: "2px",
        width: "96px",
        height: "96px",
        bgcolor: "primary.main",
        borderRadius: "50%",
      }}
      {...props}
    >
      <path
        d="M15.967-.072C7.158-.072-.008 7.106-.008 15.929c0 8.822 7.166 15.999 15.975 15.999 8.837 0 16.025-7.177 16.025-15.999S24.803-.072 15.967-.072zm7.602 26.823l.034-.134c.054-.216.104-.431.157-.647a.936.936 0 0 0-1.147-1.077c-.404.117-.461-.135-.462-.144a.933.933 0 0 0-.77-.936.933.933 0 0 0-.543.062c-.246.03-.315-.106-.332-.155a.938.938 0 0 0-.772-.91 1.011 1.011 0 0 0-.486.038s-.437.01-.335-.588a.592.592 0 0 0 .009-.186l.698-5.066c.071-.654-.053-1.048-.554-1.132-.543-.09-.822.29-.914.799 0 0-1.602 7.001-1.859 9.367-.079.717-.143 1.843-.196 3.091l-.103.002c-4.35 0-8.208-2.112-10.61-5.368.19-.455.524-.986 1.105-1.529 1.589-1.488 3.391-.193 3.972.058.582.25 3.469 1.043 3.934-.464 0 0 .155-.522.116-1.565 0 0 .039-.483.775-.347.736.134 1.162-.812.406-1.605 0 0 .737-.56 1.124-1.198.388-.637-.135-.676-.251-.772-.116-.097-.426-.812.174-1.024s2.481-.541 1.609-1.933c-.872-1.391-1.512-2.145-1.802-3.265-.291-1.121-.251-1.372.136-1.874s.33-1.237.33-2.01c0-.294.035-.928-.023-1.699l-.068.119c-.556.965-1.855 1.774-2.72 2.413-1.728 1.274-3.82 1.951-5.627 3.09-1.999 1.261-3.188 3.21-3.852 5.441a19.076 19.076 0 0 0-.717 4.099c-.036.528-.031 1.09.008 1.653-2.351-4.849-1.522-10.844 2.512-14.867 2.781-2.773 6.502-4.012 10.14-3.758l-.002-.009c6.993.349 12.566 6.126 12.566 13.199 0 4.483-2.241 8.442-5.66 10.831zM13.473 9.329c.685-.495 1.112-.479 1.112-.479a.785.785 0 1 1 0 1.57.78.78 0 0 1-.578-.261c-.374-.322-.534-.83-.534-.83z"
        fill="#FEBA02"
      ></path>
    </SvgIcon>
  );
}

const customBox = (theme) => ({
  ...theme.fullBorderedBox(theme),
  border: "1px solid #e7e7e7",
  mb: 2,
  position: "relative",
});

const SecretDeals = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <Box>
      <Container>
        <Stack sx={customBox}>
          <CloseButton onClick={() => setShow(false)} />
          <Card sx={{ width: "80%", display: "flex" }} elevation={0}>
            <CardMedia>
              <HomeIcon />
            </CardMedia>

            <CardContent sx={{ flexGrow: 1, py: "0px !important", px: 2 }}>
              <Typography component="h2" variant="subtitle1" fontWeight={700}>
                Subscribe to see Secret Deals
              </Typography>

              <Typography
                variant="body2"
                color="text.primary"
                pb=".5rem"
                sx={{
                  fontSize: "0.875rem",
                  fontWeight: 400,
                }}
              >
                Price drop the second you sign up!
              </Typography>

              <Stack
                direction="row"
                sx={{
                  gap: 2,
                  mt: 0,
                }}
              >
                <TextField
                  placeholder="Enter email"
                  sx={{
                    border: "1px solid #e7e7e7",
                    flexGrow: 1,

                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused > fieldset": {
                        border: (theme) =>
                          `2px solid ${theme.palette.primary.light}`,
                        boxShadow: "0 0 0 3px rgb(0 113 194 / 24%)",
                      },

                      ".MuiOutlinedInput-input": {
                        py: 1,
                        cursor: "pointer",
                      },
                    },
                  }}
                />
                <Button
                  variant="outlined"
                  sx={{ fontWeight: 600, width: "fit-content" }}
                  size="large"
                >
                  Sign me up!
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
};

export default SecretDeals;
