import { Typography } from "@material-ui/core";
import { makeStyles } from "@saleor/macaw-ui";
import React from "react";
import ExtendedPageHeader from "./ExtendedPageHeader";
// import Skeleton from "../Skeleton";

const useStyles = makeStyles(
  theme => ({
    limit: {
      marginRight: theme.spacing(4),
    },
    preview: {
      position: "absolute",
      top: theme.spacing(-4),
    },
    root: {
      alignItems: "center",
      display: "flex",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        alignItems: "flex-start",
        "& > *": {
          width: "100%",
        },
        "& > *:not(first-child)": {
          marginTop: theme.spacing(2),
        },
      },
    },
    title: {
      [theme.breakpoints.down("sm")]: {
        fontSize: 20,
        padding: 0,
      },
      fontWeight: 700,
      flex: 1,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  }),
  { name: "PageHeader" },
);

const PageHeader = props => {
  const {
    children,
    className,
    inline,
    underline,
    limitText,
    title,
    cardMenu,
  } = props;

  const classes = useStyles(props);

  return (
    <>
      <ExtendedPageHeader
        className={className}
        inline={inline}
        underline={underline}
        title={
          <>
            <Typography className={classes.title} variant="h3">
              {title}
            </Typography>
            {cardMenu}
          </>
        }
      >
        <div className={classes.root}>
          {limitText && (
            <Typography className={classes.limit} color="textSecondary">
              {limitText}
            </Typography>
          )}
          {children}
        </div>
      </ExtendedPageHeader>
    </>
  );
};

export default PageHeader;
