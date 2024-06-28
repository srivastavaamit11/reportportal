import { EpicList } from "./EpicList";
import { Story } from "./Story";
import { TechnicalTask } from "./TechnicalTask";
import { Automation } from "./Automation";
import { Bug } from "./Bug";

export interface CombinedData {
  epics: EpicList[];
  stories: Story[];
  tasks: TechnicalTask[];
  automations: Automation[];
  automationCount : Int16Array;
  bugsRaised: Bug[];
  bugsDelivered: Bug[];
}
