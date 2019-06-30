import CustomLogger from './src/logger'
import { myContainer } from "./src/inversify.config";
import { TYPES } from "./src/types";
import { Warrior } from "./src/interfaces";

const logger = CustomLogger.logger

const ninja = myContainer.get<Warrior>(TYPES.Warrior);

// expect(ninja.fight()).eql("cut!"); // true
// expect(ninja.sneak()).eql("hit!"); // true

logger.info('welcome to my typescript start kit!')

logger.info(`night fight! ${ninja.fight()}`)
logger.info(`night sneak! ${ninja.sneak()}`)
