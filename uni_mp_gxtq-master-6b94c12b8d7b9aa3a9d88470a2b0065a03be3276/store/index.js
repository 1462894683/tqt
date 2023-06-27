import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import * as saveKeys from "@/common/starageKeys"
const defaultData = saveKeys.defaultData
delete saveKeys.defaultData


const lifeDataKey = 'lifeData'
let lifeData = {}
try {
	lifeData = uni.getStorageSync(lifeDataKey)
} catch (e) { }
// 需要持久化的key
const saveStateKeys = Object.values(saveKeys)

const saveLifeData = function (key, value) {
	if (saveStateKeys.indexOf(key) != -1) {
		let tmp = uni.getStorageSync(lifeDataKey)
		tmp = tmp ? tmp : {}
		tmp[key] = value
		uni.setStorageSync(lifeDataKey, tmp)
	}
}

// 默认state
const defaultState = () => {
	return Object.values(saveKeys).reduce((prev, current) => {
		return {
			...prev,
			[current]: lifeData[current] ? lifeData[current] : defaultData[current],
		}
	}, {})
}
const defaultGetter = () => ({})
const store = new Vuex.Store({
	state: defaultState(),
	getters: defaultGetter(),
	mutations: {
		$store(state, payload) {
			// 判断是否多层级调用，state中为对象存在的情况，诸如user.info.score = 1
			let nameArr = payload.name.split('.')
			let saveKey = ''
			let len = nameArr.length

			if (nameArr.length >= 2) {
				let obj = state[nameArr[0]]
				for (let i = 1; i < len - 1; i++) {
					obj = obj[nameArr[i]]
				}
				obj[nameArr[len - 1]] = payload.value
				saveKey = nameArr[0]
			} else {
				// 单层级变量，在state就是一个普通变量的情况
				state[payload.name] = payload.value
				saveKey = payload.name
			}

			// 保存变量到本地
			saveLifeData(saveKey, state[saveKey])
		}
	}
})

export default store
