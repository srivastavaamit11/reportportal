import { Story } from "./Story";

export interface EpicList {
  key: string;
  summary: string;
  teams: string[]; // This can be an enum if you have predefined values
  visualizedData: string;
  stories: Story[];
}
