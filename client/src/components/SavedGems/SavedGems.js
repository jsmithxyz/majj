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
    backgroundColor: "#e1e0e5",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function SavedGems() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [state, dispatch] = useStoreContext();
  const { user } = state;
  const { queue } = user;
  const [listItems, setListItems] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUrlOpen = (item) => {
    window.open(item.url, "_blank");
  };

  const listItemMaker = (item) => {
    return (
      <>
        <ListItem
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
            height='80px'
            width='80px'
          />
          <ListItemText primary={item.name} />
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
    let itemQueue = user.queue;
    let listItems = listMaker(itemQueue);
    setListItems(listItems);
  }, [user.queue]);

  return (
    <>
      <Button onClick={handleClickOpen}>
        <OverlayTrigger
          key='bottom'
          placement='bottom'
          overlay={<Tooltip id={`tooltip-bottom`}>see your saved gems</Tooltip>}
        >
          <i className='far fa-gem fa-2x'></i>
        </OverlayTrigger>
      </Button>
      <Dialog
        fullScreen
        open={open}
        className={classes.dialog}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              Saved Gems
            </Typography>
            <Button autoFocus color='inherit' onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>{listItems}</List>
      </Dialog>
    </>
  );
}
