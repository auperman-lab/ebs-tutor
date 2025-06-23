import { SelectProps } from "antd";

export type CardHeaderProps = {
  title:  string;
  options: CardHeaderOptions[]
  legend?: LegendPin[];
  onChange?: SelectProps["onChange"]
}

type CardHeaderOptions = {
  value: string;
  label: string;
}

type LegendPin = {
  color:string;
  name: string;
}


