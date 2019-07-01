import CustomLogger from './src/logger'
import 'reflect-metadata'

const logger = CustomLogger.logger
logger.info('welcome to my typescript start kit!')

import { Container, /* Inject,*/ Service } from 'typedi'

@Service()
class BeanFactory {
  create() {
    logger.info('BeanFactory: create.')
  }
}

@Service()
class SugarFactory {
  create() {
    logger.info('SugarFactory: create.')
  }
}

@Service()
class WaterFactory {
  create() {
    logger.info('WaterFactory: create.')
  }
}

@Service()
class CoffeeMaker {
  // injection style
  // @Inject()
  // beanFactory: BeanFactory
  // @Inject()
  // sugarFactory: SugarFactory
  // @Inject()
  // waterFactory: WaterFactory

  private beanFactory!: BeanFactory
  private sugarFactory!: SugarFactory
  private waterFactory!: WaterFactory

  constructor(beanFactory: BeanFactory, sugarFactory: SugarFactory, waterFactory: WaterFactory) {
    this.beanFactory = beanFactory
    this.sugarFactory = sugarFactory
    this.waterFactory = waterFactory
  }

  make() {
    logger.info('CoffeeMakser: make.')
    this.beanFactory.create()
    this.sugarFactory.create()
    this.waterFactory.create()
  }
}

let coffeeMaker = Container.get(CoffeeMaker)
coffeeMaker.make()
