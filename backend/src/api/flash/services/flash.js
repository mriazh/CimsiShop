'use strict';

/**
 * flash service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::flash.flash');
