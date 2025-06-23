import { SelectProps } from "antd";

export type CardHeaderProps = {
  title:  string;
  options: CardHeaderOptions[]
  onChange?: SelectProps["onChange"]
}

type CardHeaderOptions = {
  value: string;
  label: string;
}


