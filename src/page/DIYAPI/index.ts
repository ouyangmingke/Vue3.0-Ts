
// 反射
// Reflect

//#region 自定义响应式操作

const reactiveHandler = {
    /**
     * 拦截获取属性值
     */
    get(target, prop) {
        if (prop === '_is_reactive') return true
        const result = Reflect.get(target, prop);
        console.log("读取数据");
        return result;
    },
    /**
     * 拦截修改或添加属性
     */
    set(target, prop, value) {
        const result = Reflect.set(target, prop, value);
        console.log('数据已更新, 去更新界面')
        return result;
    },
    /**
     * 拦截删除属性
     */
    deleteProperty(target, prop) {
        const result = Reflect.deleteProperty(target, prop);
        console.log('数据已删除, 去更新界面')
        return result;
    }
}

/**
 * 自定义 ShallowReactive
 * @param {*} targer 
 */
function ShallowReactive(targer) {

    // 判断当前是不是 Object 类型（对象/数组）
    if (targer && typeof (targer) === "object") {
        return new Proxy(targer, reactiveHandler)
    }
    // 如果传入的是基本类型的数据，那么就直接返回
    return targer;
}

/**
 * 自定义 reactive
 * @param {*} targer 
 */
function reactive(targer) {
    // 判断当前是不是 Object 类型（对象/数组）
    if (targer && typeof (targer) === "object") {
        // 判断当前数据是不是数组
        if (Array.isArray(targer)) {
            targer.forEach((item, index) => {
                targer[index] = reactive(item);
            })
        } else {
            Object.keys(targer).forEach(key => {
                targer[key] = reactive(targer[key])
            })
        }
        return new Proxy(targer, reactiveHandler)
    }
    // 如果传入的是基本类型的数据，那么就直接返回
    return targer;
}
//#endregion

export { ShallowReactive, reactive }

//#region 自定义只读
const readonlyHandler = {
    get(target, key) {
        if (key === '_is_readonly') return true
        return Reflect.get(target, key)
    },

    set() {
        console.warn('只读的, 不能修改')
        return true
    },

    deleteProperty() {
        console.warn('只读的, 不能删除')
        return true
    },
}

/* 
自定义shallowReadonly
*/
function shallowReadonly(obj) {
    return new Proxy(obj, readonlyHandler)
}

/* 
自定义readonly
*/
function readonly(target) {
    if (target && typeof target === 'object') {
        if (target instanceof Array) { // 数组
            // 如果是数组 递归判断
            target.forEach((item, index) => {
                target[index] = readonly(item)
            })
        } else { // 对象
            Object.keys(target).forEach(key => {
                // 递归判断
                target[key] = readonly(target[key])
            })
        }
        const proxy = new Proxy(target, readonlyHandler)

        return proxy
    }

    return target
}

//#endregion

export { shallowReadonly, readonly }

//#region 自定义 Ref

/** 自定义shallowRef
 * 
 * @param target 
 * @returns 
 */
function shallowRef(target) {
    const result = {
        _value: target, // 用来保存数据的内部属性
        _is_ref: true, // 用来标识是ref对象
        get value() {
            return this._value
        },
        set value(val) {
            this._value = val
            console.log('set value 数据已更新, 去更新界面')
        }
    }
    return result
}

/** 自定义ref
 * 
 * @param target 
 * @returns 
 */
function ref(target) {
    if (target && typeof target === 'object') {
        target = reactive(target)
    }
    const result = {
        _value: target, // 用来保存数据的内部属性
        _is_ref: true, // 用来标识是ref对象
        get value() {
            return this._value
        },
        set value(val) {
            this._value = val
            console.log('set value 数据已更新, 去更新界面')
        }
    }

    return result
}

//#endregion

export { shallowRef, ref }

//#region 自定义验证
/* 
判断是否是ref对象
*/
function isRef(obj) {
    return obj && obj._is_ref
}

/* 
判断是否是reactive对象
*/
function isReactive(obj) {
    return obj && obj._is_reactive
}

/* 
判断是否是readonly对象
*/
function isReadonly(obj) {
    return obj && obj._is_readonly
}

/* 
是否是reactive或readonly产生的代理对象
*/
function isProxy(obj) {
    return isReactive(obj) || isReadonly(obj)
}

//#endregion

export { isRef, isReactive, isReadonly, isProxy }