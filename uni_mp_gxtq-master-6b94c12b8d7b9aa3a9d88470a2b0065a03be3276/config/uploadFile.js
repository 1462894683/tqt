import config from "./index";

export default function (count = 1,type) {
    return new Promise(((resolve, reject) => {
    	console.log('111',config.BASE_URL)
		if(type==1){
			uni.chooseImage({
				count,
				success(res) {
					if(res.tempFilePaths){
						uni.showLoading({
							title: '上传中...',
							mask: true
						})
						uni.uploadFile({
							url: config.BASE_URL+ '/Upload/uploadImage',
							filePath: res.tempFilePaths[0],
							name: 'file',
							success: (uploadFileRes) => {
								let data= JSON.parse(uploadFileRes.data)
								uni.hideLoading()
								resolve(data.data)
							}
						});
					}
				}
			})
		}else{
			uni.chooseVideo({
				count,
				success(res) {
					console.log(res,'resresres')
					if(res.tempFilePath){
						uni.showLoading({
							title: '上传中...',
							mask: true
						})
						uni.uploadFile({
							url: config.BASE_URL+ '/Upload/uploadImage',
							filePath: res.tempFilePath,
							name: 'file',
							success: (uploadFileRes) => {
								let data= JSON.parse(uploadFileRes.data)
								uni.hideLoading()
								resolve(data.data)
							}
						});
					}
				}
			})
		}
    }))
}
