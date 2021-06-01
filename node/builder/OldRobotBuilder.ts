import { Robot } from "./Robot";
import { RobotBuilder } from "./RobotBuilder";

export class OldRobotBuilder implements RobotBuilder {

  private robot: Robot;

  constructor() {
    this.robot = new Robot();
  }

  buildRobotHead(): void {
    this.robot.setRobotHead('Tin');
  }
  buildRobotTorse(): void {
    this.robot.setRobotTorso('Tin torso');
  }
  buildRobotArms(): void {
    this.robot.setRobotArms('Blowtorch');
  }
  buildRobotLegs(): void {
    this.robot.setRobotLegs('Roller skates');
  }
  getRobot(): Robot {
    return this.robot;
  }
}
