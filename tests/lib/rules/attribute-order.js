/**
 * @fileoverview enforce alphabetical ordering of properties and prioritizing vue-specific attributes
 * @author Erin Depew
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../../../lib/rules/attribute-order')

var RuleTester = require('eslint').RuleTester

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var tester = new RuleTester({
  parser: 'vue-eslint-parser',
  parserOptions: {ecmaVersion: 2015}
})
tester.run('attribute-order', rule, {

  valid: [
    {
      filename: 'test.vue',
      code: '<template><div></div></template>'
    },
    {
      filename: 'test.vue',
      code: '<template><div><custom aria-test="bar" data-id="foo" myProp="prop"></custom></div></template>'
    },
    {
      filename: 'test.vue',
      code: '<template><div><custom v-if="bar" data-id="foo" myProp="prop"></custom></div></template>'
    },
    {
      filename: 'test.vue',
      code: '<template><div><custom v-if="bar" data-id="foo" :myProp="prop"></custom></div></template>'
    },
    {
      filename: 'test.vue',
      code: '<template><div><custom aria-test="bar" :class="$style.foo" myProp="prop"></custom></div></template>'
    },
    {
      filename: 'test.vue',
      code: '<template><div><custom @click="bar" :class="$style.foo" myProp="prop"></custom></div></template>'
    },
    {
      filename: 'test.vue',
      code: '<template><div><custom @click="bar" :class="$style.foo" myProp="prop" ref="myComponent"></custom></div></template>'
    },
    {
      filename: 'test.vue',
      code: '<template><div><custom @click="bar" v-for="(item, index) in items" :class="$style.foo" myProp="prop" ref="myComponent"></custom></div></template>'
    }
  ],

  invalid: [
    {
      filename: 'test.vue',
      code: '<template><div><custom data-id="foo" aria-test="bar" myProp="prop"></custom></div></template>',
      errors: [{
        message: 'Attribute aria-test must go before data-id.',
        type: 'VIdentifier'
      }]
    },
    {
      filename: 'test.vue',
      code: '<template><div><custom data-id="foo" myProp="prop" v-if="bar" ></custom></div></template>',
      errors: [{
        message: 'Attribute v-if must go before myProp.',
        type: 'VDirectiveKey'
      }]
    },
    {
      filename: 'test.vue',
      code: '<template><div><custom data-id="foo" :myProp="prop" v-if="bar"></custom></div></template>',
      errors: [{
        message: 'Attribute v-if must go before :myProp.',
        type: 'VDirectiveKey'
      }]
    },
    {
      filename: 'test.vue',
      code: '<template><div><custom :class="$style.foo"  aria-test="bar" myProp="prop"></custom></div></template>',
      errors: [{
        message: 'Attribute aria-test must go before :class.',
        type: 'VIdentifier'
      }]
    },
    {
      filename: 'test.vue',
      code: '<template><div><custom @click="bar" myProp="prop" :class="$style.foo"></custom></div></template>',
      errors: [{
        message: 'Attribute :class must go before myProp.',
        type: 'VDirectiveKey'
      }]
    },
    {
      filename: 'test.vue',
      code: '<template><div><custom :class="$style.foo" @click="bar" myProp="prop" ref="myComponent"></custom></div></template>',
      errors: [{
        message: 'Attribute @click must go before :class.',
        type: 'VDirectiveKey'
      }]
    },
    {
      filename: 'test.vue',
      code: '<template><div><custom v-for="(item, index) in items"  @click="bar" :class="$style.foo" myProp="prop" ref="myComponent"></custom></div></template>',
      errors: [{
        message: 'Attribute @click must go before v-for.',
        type: 'VDirectiveKey'
      }]
    }
  ]
})
