import {assert} from 'chai'
import {describe, it} from 'mocha'
import run from '../src/index'

describe('run', () => {
  it('should return hello world', () => {
    assert.equal(run('world'), 'hello world')
  })
})
