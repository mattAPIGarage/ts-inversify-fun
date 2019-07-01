import { Service } from 'typedi'
import CustomLogger from './logger'

const logger = CustomLogger.logger

// mockup type
type ITokenEntry = string

@Service()
export class ITokenRepository {
  param: string
  create(param: string) {
    this.param = param
    logger.info('ITokenRepository: create.')
  }
  show() {
    logger.info(`ITokenRepository with param: ${this.param}`)
  }
  storeActivationEntry(activationToken: ITokenEntry) {
    logger.info(`storeActivationEntry | activationToken: ${activationToken}`)
  }
  storeRecoveryEntry(recoveryToken: ITokenEntry) {
    logger.info(`storeActivationEntry | ecoveryToken: ${recoveryToken}`)
  }
  getEntryWithToken(token: string): Promise<ITokenEntry> {
    logger.info(`getEntryWithToken`)
    return Promise.resolve(`token ${token} resolves to something ITokenEntry'ish`)
  }
  getEntryWithProviderId(providerId: string): Promise<ITokenEntry> {
    logger.info(`getEntryWithProviderId`)
    return Promise.resolve(`providerId ${providerId} resolves to something ITokenEntry'ish`)
  }
  storeAttributeVerifyToken(attributeVerifyToken: ITokenEntry) {
    logger.info(`storeAttributeVerifyToken | attributeVerifyToken: ${attributeVerifyToken}`)
  }
}

@Service()
export class ApplicationsService {
  create() {
    logger.info('ApplicationsService: create.')
  }
}

@Service()
export class IIdentityRepository {
  create() {
    logger.info('IIdentityRepository: create.')
  }
}
