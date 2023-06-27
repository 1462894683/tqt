import dayjs from "dayjs";
//价格
export const price = (v = 0, mantissa = true) => {
	if (!v) v = 0
	return mantissa ? v.toFixed(2) : +(v.toFixed(2))
}

//手机号
export const phone = (phone = '') => {
	let str = phone ? phone.toString() : ''
	return str.replace(/(\d{3})\d{4}(\d?)/, '$1****$2')
}

//文件大小
export const byteToSize = bytes => {
	if (bytes === 0) return '0 B'
	let k = 1024,
		sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
		i = Math.floor(Math.log(bytes) / Math.log(k))

	return (bytes / Math.pow(k, i)).toPrecision(3) + '' + sizes[i]
}

//数量 mode zh / en
export const count = (count, min = 10000, mode = 'zh') => {
	let v = Number(count)
	if (!v) {
		return 0
	} else if (v < min) {
		return v
	} else if (v >= 10000) {
		return formatDecimal(v / 10000) + `${mode === 'zh' ? '万' : 'w'}`
	} else if (v >= 1000 && v < 10000) {
		return formatDecimal(v / 1000) + `${mode === 'zh' ? '千' : 'k'}`
	}
	return v
}

function formatDecimal(num, decimal = 1) {
	num = num.toString()
	let index = num.indexOf('.')
	if (index !== -1) {
		num = num.substring(0, decimal + index + 1)
	} else {
		num = num.substring(0)
	}
	return parseFloat(num)
}

export const humanTime = (time) => {
	return uni.$u.timeFrom(dayjs(time).valueOf(), false)
}
