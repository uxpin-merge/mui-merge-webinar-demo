import React from 'react';
import PropTypes from 'prop-types';
import DialogM from "@mui/material/Dialog";
import { v4 as uuidv4 } from 'uuid';

/**
 * @uxpindocurl https://mui.com/api/dialog/#main-content
 */

/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
function Dialog(props) {

  const { uxpinRef, ...other } = props;
  let id = uuidv4();

  const [open, setOpen] = React.useState(props.open);

  React.useEffect(() => setOpen(props.open), [props]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div ref={uxpinRef} id={id}
      style={{ minWidth: "300px", minHeight: "300px", height: props.height, width: props.width }}
    >


      <DialogM
        PaperProps={{ sx: { position: "fixed", top: props.topPosition } }}
        TransitionProps={{ tabIndex: "null" }}
        open={open}
        onClose={() => setOpen(false)}
        // disableEnforceFocus
        // keepMounted
        // disablePortal={false}
        container={() => document.getElementById(id)}
        // style={{ minWidth: "300px", minHeight: "300px", width: "100%", height: "100%" }} 
        {...other}
      >
        {props.children}
      </DialogM></div>
  )
}

Dialog.propTypes = {
  /**
   * If `true`, the Dialog is open.
   */
  open: PropTypes.bool,
  /**
   * Width of the dialog. This should equal the width of UXP canvas

   */
  width: PropTypes.number,
  /**
   * Height of the dialog. This should equal the height of UXP canvas

   */
  height: PropTypes.number,

  /**
 * Height of the dialog. This should equal the height of UXP canvas

 */
  topPosition: PropTypes.number,


  /**
   * If `true`, the dialog will be full-screen
   */
  fullScreen: PropTypes.bool,

  /**
   * If `true`, clicking the backdrop will not fire the `onClose` callback.
   * @uxpinignoreprop
   */
  disableBackdropClick: PropTypes.bool,

  /**
   * If true, hitting escape will not fire the onClose callback.
   */
  /** @uxpinignoreprop */
  disableEscapeKeyDown: PropTypes.bool,

  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: PropTypes.func,


  /**
   * Determine the max width of the dialog.
   * The dialog width grows with the size of the screen, this property is useful
   * on the desktop where you might need some coherent different width size across your
   * application. Set to `false` to disable `maxWidth`.
   */
  maxWidth: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", false]),



  /**
   *  @uxpinignoreprop
   */
  children: PropTypes.node,

  /**
   * The component used to render the body of the dialog.
   */
  /** @uxpinignoreprop */
  PaperComponent: PropTypes.elementType,

  /**
   * The component used for the transition. 
   * Follow this guide: https://mui.com/components/transitions/#transitioncomponent-prop 
   * to learn more about the requirements for this component.
   */
  /** @uxpinignoreprop */
  TransitionComponent: PropTypes.elementType,

  /**
   * The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object.
   */
  /** @uxpinignoreprop */
  trainstionDuration: PropTypes.oneOf([PropTypes.number, PropTypes.object]),

  /**
   * Props applied to the transition element. By default, the element is based on this Transition component http://reactcommunity.org/react-transition-group/transition.
   */
  /** @uxpinignoreprop */
  TransitionProps: PropTypes.object,

  /**
   * Override or extend the styles applied to the component. See CSS API https://mui.com/api/dialog/#css for more details.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * Determine the container for scrolling the dialog.
   */
  scroll: PropTypes.oneOf(['body', 'paper']),
  /**
 * Enter event to use with UXPin interactions.
 */
  onEnter: PropTypes.func,

  /**
   * Exit event to use with UXPin interactions.
   */
  onExit: PropTypes.func,

  onClose: PropTypes.func,

  /**
 * If `true`, the dialog stretches to `maxWidth`.
 * @uxpinignoreprop
 */
  fullWidth: PropTypes.bool,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles. 
   * See the `sx` page for more details. https://mui.com/system/the-sx-prop/
   */
  /** */
  sx: PropTypes.object,

};


export default Dialog;