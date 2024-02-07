/**
 * Define your API endpoints and other constants that vary according to the environment
 */

import { isProduction } from './utils/env'

const development = {}

const production = {}

const config = isProduction() ? production : development

export default config
