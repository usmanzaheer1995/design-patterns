import { Robot } from "./Robot";

export interface RobotBuilder {
  buildRobotHead(): void;
  buildRobotTorse(): void;
  buildRobotArms(): void;
  buildRobotLegs(): void;
  getRobot(): Robot;
}
