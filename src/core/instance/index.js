import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue) // 说明不是通过new操作符创建的实例对象
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 这应该是一个扩展点，否则会到原型链上的定义
  // 20230421 在mixin的初始化中定义了这个方法
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
