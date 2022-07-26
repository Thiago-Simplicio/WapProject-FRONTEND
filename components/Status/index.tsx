import * as React from "react";
import * as Styled from "./styled";
import Stack from "@material-ui/core/Stack";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/core/Alert";

interface statusProps {
  type: string | any;
  msg: string | any;
  open: boolean | any;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Status = (props: statusProps) => {
  return (
    <Styled.Container>
      <Stack sx={{ width: "100%" }}>
        {props?.type === "Error" ? (
          <Snackbar open={props?.open} autoHideDuration={2000}>
            <Alert severity="error" sx={{ width: "100%" }}>
              {props?.msg}
            </Alert>
          </Snackbar>
        ) : null}
        {props?.type === "Warning" ? (
          <Snackbar open={props?.open} autoHideDuration={2000}>
            <Alert severity="warning" sx={{ width: "100%" }}>
              {props?.msg}
            </Alert>
          </Snackbar>
        ) : null}
        {props?.type === "Success" ? (
          <Snackbar open={props?.open} autoHideDuration={2000}>
            <Alert severity="success" sx={{ width: "100%" }}>
              {props?.msg}
            </Alert>
          </Snackbar>
        ) : null}
      </Stack>
    </Styled.Container>
  );
};

export default Status;
