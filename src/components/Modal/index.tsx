// import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cancel from "@mui/icons-material/Cancel";
import { Dialog, DialogContent, DialogProps, DialogTitle } from "@mui/material";
import { LoadingSpinner } from "components/LoadingSpinner";
import { CSSProperties } from "react";

// import { shapeTheme } from "../../theme";
// import { ContainedLoading } from "../Loading";
import style from "./index.module.scss";

interface IModalExtraProps {
  title?: string | JSX.Element;
  footer?: string | JSX.Element;
  hasCloseIcon?: boolean;
  dataTestId?: string;
  minWidth?: number | string;
  width?: string;
  maxWidth?: number | string;
  height?: string;
  maxHeight?: string;
  isLoading?: boolean;
  customStyle?: CSSProperties;
}

export type Props = Omit<DialogProps, "maxWidth" | "title"> & IModalExtraProps;

export function Modal({
  title,
  children,
  footer,
  open,
  onClose,
  isLoading = false,
  hasCloseIcon = true,
  dataTestId,
  className,
  fullWidth,
  minWidth = 200,
  width,
  maxWidth,
  height,
  maxHeight,
  hideBackdrop,
  customStyle,
  ...restProps
}: Props) {
  const defaultPadding = "16px";

  return (
    <Dialog
      PaperProps={{
        style: {
          minWidth,
          maxWidth,
          width,
          height,
          maxHeight,
          ...customStyle,
        },
      }}
      className={className}
      data-test-id={dataTestId || "modal"}
      fullWidth={fullWidth}
      hideBackdrop={hideBackdrop}
      maxWidth={false}
      onClose={onClose}
      open={open}
      sx={{
        fontSize: "14px",
        zIndex: 1000,
        ...(!hideBackdrop && { backdropFilter: "blur(3px)" }),
      }}
      {...restProps}
    >
      {hasCloseIcon && (
        <Cancel
          className={`close-modal ${style.close}`}
          data-testid="close-modal"
          onClick={onClose as () => void}
        />
      )}

      {title && (
        <DialogTitle
          sx={{
            fontWeight: "bold",
            fontSize: "16px",
            padding: `10px ${defaultPadding} 10px`,
            ...(hasCloseIcon && { paddingRight: "50px" }),
          }}
        >
          {title}
        </DialogTitle>
      )}

      <DialogContent
        sx={{
          padding: defaultPadding,
          ...(!title && hasCloseIcon && { paddingTop: "45px" }),
          ...(footer && { paddingBottom: 0 }),
        }}
      >
        {isLoading ? (
          <div
            style={{
              minHeight: "70px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <LoadingSpinner />
          </div>
        ) : (
          children
        )}
      </DialogContent>
      {footer && <div style={{ padding: defaultPadding }}>{footer}</div>}
    </Dialog>
  );
}
