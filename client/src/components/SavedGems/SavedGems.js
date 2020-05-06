import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { useStoreContext } from "../../utils/GlobalState";
import { Image, Button, OverlayTrigger, Tooltip } from "react-bootstrap";

import Database from "../../utils/Database";
import { CLEAR_QUEUE } from "../../utils/actions";

import "./SavedGems.css";


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "#653cad",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    fontFamily: "Gotu",
  },
  dialog: {
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#e1e0e5",
    },
  },
  headerText: {
    marginLeft: "20px",
    fontWeight: "bold",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SavedGems() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [state, dispatch] = useStoreContext();
  const { user } = state;

  const [listItems, setListItems] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClear = () => {
    Database.updateQueue({
      name: user.username,
      queue: [],
    }).then((res) => {
      dispatch({
        type: CLEAR_QUEUE,
      });
    });
  };

  const handleUrlOpen = (item) => {
    window.open(item.url, "_blank");
  };

  const listItemMaker = (item) => {
    return (
      <>
        <ListItem
          className={classes.dialog}
          button
          onClick={() => {
            window.open(item.url, "_blank");
          }}
        >
          <Image
            src={
              item.image?.thumbnail.contentUrl ||
              "https://media.giphy.com/media/PdfNwG98g6Sxq/source.gif"
            }
            roundedCircle
            height="80px"
            width="80px"
          />
          <ListItemText className={classes.headerText}>
            {item.name}
          </ListItemText>
        </ListItem>
        <Divider />
      </>
    );
  };

  const listMaker = (itemQueue) => {
    let listItems = itemQueue.map((item) => {
      let parsedItem = JSON.parse(item);
      return listItemMaker(parsedItem);
    });
    return listItems;
  };

  useEffect(() => {
    let newListItems = listMaker(user.queue);
    setListItems(newListItems);
  }, [user.queue.length]);

  return (
    <>
      <Button onClick={handleClickOpen}>
        <OverlayTrigger
          key="bottom"
          placement="bottom"
          overlay={
            <Tooltip id={`tooltip-bottom`}>view your saved gems</Tooltip>
          }
        >
          <i className="far fa-gem fa-2x"></i>
        </OverlayTrigger>
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Saved Gems
            </Typography>

            <Button autoFocus color='inherit' onClick={handleClear}>

              clear all
            </Button>
          </Toolbar>
        </AppBar>
        <List>{listItems}</List>
      </Dialog>
    </>
  );
}
