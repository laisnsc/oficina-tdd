const Queue = require('./queue')

describe('Queue', () => {
  let queue

  beforeEach(() => {
    queue = new Queue()
  })

  it('Deve criar uma fila', () => {
    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    expect(queue.size()).toBe(0)
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
   queue.add('item')

    expect(queue.size()).toBe(1)
  })

  it('Deve escolher o primeiro item da fila', () => {
    queue.add('item1')
    queue.add('item2')

    expect(queue.peek()).toEqual('item1')
  })

  it('Deve remover o primeiro item da fila', () => {
    queue.add('item1')
    queue.add('item2')
    queue.dequeue()

    expect(queue.size()).toBe(1)
    expect(queue.peek()).toEqual('item2')
  })
})