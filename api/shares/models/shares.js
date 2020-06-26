'use strict';

const { default: createStrapi } = require("strapi");

/**
 * Lifecycle callbacks for the `shares` model.
 */

module.exports = {
    
    lifecycles: {
    
        beforeFind(params, populate) {
            strapi.io.emit('share_before_find', {params, populate})
        },

        afterFind(results, params, populate) {
            strapi.io.emit('share_after_find', {results, params, populate})
        },

        beforeFindOne(params, populate) {
            strapi.io.emit('share_before_find_one', {params, populate})
        },

        afterFindOne(result, params, populate) {
            strapi.io.emit('share_after_find_one', {result, params, populate})
        },

        beforeCreate(data) {
            strapi.io.emit('share_before_create', {data})
        },

        afterCreate(result, data) {
            strapi.io.emit('share_after_create', {result, data})
        },

        beforeUpdate(params, data) {
            strapi.io.emit('share_before_update', {params, data})
        },

        afterUpdate(result, params, data) {
            strapi.io.emit('share_after_update', {result, params, data})
        },

        beforeDelete(params) {
            strapi.io.emit('share_before_delete', {params})
        },

        afterDelete(result, params) {
            strapi.io.emit('share_after_delete', {result, params})
        },

        beforeCount(params) {
            strapi.io.emit('share_before_count', {params})
        },

        afterCount(result, params) {
            strapi.io.emit('share_after_count', {result, params})
        },

        beforeSearch(params, populate) {
            strapi.io.emit('share_before_search', {params, populate})
        },

        afterSearch(result, params) {
            strapi.io.emit('share_after_search', {result, params})
        },

        beforeCountSearch(params) {
            strapi.io.emit('share_before_count_search', {params})
        },

        afterCountSearch(result, params) {
            strapi.io.emit('share_after_count_search', {result, params})
        }
    }
};
