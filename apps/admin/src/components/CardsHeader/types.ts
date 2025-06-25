import { SelectProps } from "antd";

export type CardHeaderProps = {
  title:  string;
  options: CardHeaderOptions[]
  defaultOption?: string;
  legend?: LegendPin[];
  onChange?: SelectProps["onChange"]
  width?: number
}

type CardHeaderOptions = {
  value: string;
  label: string;
}

type LegendPin = {
  color:string;
  name: string;
}


