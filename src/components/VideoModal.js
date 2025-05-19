import React, { memo } from "react";
import { Modal } from "@material-ui/core";
import { useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const VideoModal = memo(({ url, open, onClose }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Modal
      open={open}
      onClose={onClose}
      style={{
        modal: {
          maxWidth: "unset",
          width: "100%",
          padding: "unset"
        },
        overlay: {
          background: "rgba(0, 0, 0, 0.5)"
        },
        closeButton: {
          background: "yellow"
        }
      }}
      center
    >
      <iframe title="2016 Competition Video" src={url} style={{
        position: 'absolute',
        width: matches? '40vw' : '100vw',
        height: matches? '50vh' : '80vh',
        left: matches? '30vw' : '0vw',
        top: matches? '25vh' : '10vh',
      }} allow="autoplay" />
    </Modal>
  )
})
export default VideoModal