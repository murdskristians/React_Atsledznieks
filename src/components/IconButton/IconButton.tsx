import { Button, IProps } from "@/components/Button";

export const IconButton = (props: IProps) => (
  <Button
    rectangle
    type="button"
    {...props}
    className={props.className}
    textWrapperClassName="!px-3"
  />
);
