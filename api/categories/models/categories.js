'use strict';

const { default: createStrapi } = require("strapi");

/**
 * Lifecycle callbacks for the `categories` model.
 */

module.exports = {
  // Before saving a value.
  // Fired before an `insert` or `update` query.
  beforeSave: async (model, attrs, options) => {
    strapi.io.emit('category_before_save', {model, attrs, options})
  },

  // After saving a value.
  // Fired after an `insert` or `update` query.
  afterSave: async (model, response, options) => {
    strapi.io.emit('category_after_save', {model, response, options})
  },

  // Before fetching a value.
  // Fired before a `fetch` operation.
  beforeFetch: async (model, columns, options) => {
    strapi.io.emit('category_before_fetch', {model, columns, options})
  },

  // After fetching a value.
  // Fired after a `fetch` operation.
  afterFetch: async (model, response, options) => {
    strapi.io.emit('category_after_fetch', {model, response, options})
  },

  // Before fetching all values.
  // Fired before a `fetchAll` operation.
  beforeFetchAll: async (model, columns, options) => {
    strapi.io.emit('category_before_fetch_all', {model, columns, options})
  },

  // After fetching all values.
  // Fired after a `fetchAll` operation.
  afterFetchAll: async (model, response, options) => {
    strapi.io.emit('category_after_fetch_all', {model, response, options})
  },

  // Before creating a value.
  // Fired before an `insert` query.
  beforeCreate: async (model, attrs, options) => {
    strapi.io.emit('category_before_create', {model, attrs, options})
  },

  // After creating a value.
  // Fired after an `insert` query.
  afterCreate: async (model, attrs, options) => {
    strapi.io.emit('category_after_create', {model, attrs, options})
  },

  // Before updating a value.
  // Fired before an `update` query.
  beforeUpdate: async (model, attrs, options) => {
    strapi.io.emit('category_before_update', {model, attrs, options})
  },

  // After updating a value.
  // Fired after an `update` query.
  afterUpdate: async (model, attrs, options) => {
    strapi.io.emit('category_after_update', {model, attrs, options})
  },

  // Before destroying a value.
  // Fired before a `delete` query.
  beforeDestroy: async (model, attrs, options) => {
    strapi.io.emit('category_before_destroy', {model, attrs, options})
  },

  // After destroying a value.
  // Fired after a `delete` query.
  afterDestroy: async (model, attrs, options) => {
    strapi.io.emit('category_after_destroy', {model, attrs, options})
  }
};
