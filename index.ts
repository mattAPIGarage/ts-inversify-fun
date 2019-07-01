import CustomLogger from './src/logger'
import 'reflect-metadata'

const logger = CustomLogger.logger
logger.info('welcome to my typescript start kit!')

import { Container, Service } from 'typedi'
import { ITokenRepository, ApplicationsService, IIdentityRepository } from './src/service.factory'

@Service()
class UserService {
  //
  // constructor injection style
  // Nore: there is also a property injection style
  // e.g.
  // @Inject()
  // beanFactory: BeanFactory
  //
  tokendb!: ITokenRepository
  appService!: ApplicationsService
  identitydb!: IIdentityRepository
  constructor(
    tokendb: ITokenRepository,
    appService: ApplicationsService,
    identitydb: IIdentityRepository,
  ) {
    this.tokendb = tokendb
    this.appService = appService
    this.identitydb = identitydb
  }

  make(param: string) {
    logger.info('making the userService by injecting dependence... ')
    this.tokendb.create(param)
    this.appService.create()
    this.identitydb.create()
  }
  doSomthing() {
    logger.info('calling tokendb.show ...')
    this.tokendb.show()
    const token = '12345'
    logger.info(`calling tokendb.storeActivationEntry with token ${token} ...`)
    this.tokendb.storeActivationEntry(token)
  }
}
logger.info('>>> making the service with some parameters .... ')
const userService = Container.get(UserService)
userService.make('123')
userService.doSomthing()

logger.info(
  '>>> fetch the same service from the container (no make),  should be the same instance .... ',
)
const userService2 = Container.get(UserService)
userService2.doSomthing()

// TODO: play with nameed / tokenize service
