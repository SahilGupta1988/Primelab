import { createStyles, makeStyles } from "@mui/styles";

const useStyles: any = makeStyles(() =>
  createStyles({
    "@global": {
      "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
      },
      html: {
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        height: "100%",
        width: "100%",
      },
      body: {
        height: "100%",
        width: "100%",
        fontFamily: "Times New Roman",
      },
    },
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export { GlobalStyles };
