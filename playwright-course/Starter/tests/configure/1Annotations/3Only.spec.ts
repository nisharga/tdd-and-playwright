import { test, expect } from '@playwright/test'

test('Test 1', () => {
    console.log('test 1')
})

test.only('Test 2', {
    tag: '@test'
}, () => {
    console.log('test 2')
})

test('Test 3', () => {
    console.log('test 3')
})

test('Test 4', () => {
    console.log('test 4')
})