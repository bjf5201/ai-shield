import {assert} from 'chai'
import {describe, it} from 'mocha'

import run from '../src/index.js'

describe('run', () => {
  it('should return hello world', () => {
    assert.equal(run('world'), 'hello world')
  })
})
