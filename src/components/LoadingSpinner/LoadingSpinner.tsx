import { CSSProperties } from "react";

import style from "./LoadingSpinner.module.scss";

export interface ILoadingSpinnerProps {
  size?: number | string;
  dataTestId?: string;
  customStyle?: CSSProperties;
}

export const LoadingSpinner = ({
  dataTestId,
  size = 38,
  customStyle,
}: ILoadingSpinnerProps) => {
  return (
    <div
      className="spin"
      data-testid={dataTestId}
      style={{
        ...customStyle,
      }}
    >
      <div
        className={`loading-spinner ${style.LoadingSpinner}`}
        style={{
          height: size,
          width: size,
        }}
      />
    </div>
  );
};
