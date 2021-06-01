import { OldRobotBuilder } from "./OldRobotBuilder";
import { Robot } from "./Robot";
import { RobotBuilder } from "./RobotBuilder";
import { RobotEngineer } from "./RobotEngineer";

const oldStyleRobot: RobotBuilder = new OldRobotBuilder();

const robotEngineer: RobotEngineer = new RobotEngineer(oldStyleRobot);

robotEngineer.makeRobot();

const firstRobot: Robot = robotEngineer.getRobot();
console.log('Robot: ', firstRobot); 