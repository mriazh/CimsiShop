'use strict';

/**
 * flash router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::flash.flash');
