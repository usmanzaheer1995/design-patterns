// Also known as a director

import { Robot } from "./Robot";
import { RobotBuilder } from "./RobotBuilder";

export class RobotEngineer {
  private robotBuilder: RobotBuilder;

  constructor(robotBuilder: RobotBuilder) {
    this.robotBuilder = robotBuilder;
  }

  getRobot(): Robot {
    return this.robotBuilder.getRobot();
  }

  makeRobot() {
    this.robotBuilder.buildRobotHead();
    this.robotBuilder.buildRobotTorse();
    this.robotBuilder.buildRobotArms();
    this.robotBuilder.buildRobotLegs();
  }
}