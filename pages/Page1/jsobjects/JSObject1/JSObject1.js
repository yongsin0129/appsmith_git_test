export default {
	myVar1:[
		{ customId: 1, customParentId: null, customName: 'node1' },
		{ customId: 2, customParentId: 1, customName: 'node2' },
		{ customId: 3, customParentId: 1, customName: 'node33' },
	],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async getAllLogsInLoadingPage () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		removeValue("allLogs")
		const allLogs = await getAllLogs.run()
		storeValue('allLogs',allLogs)
		showAlert('資料同步成功','success')
		removeValue("allLogs")
	},

	getLogFromAllLogs (userName) {
		if(!appsmith.store.allLogs) {
			showAlert('資料尚未同步，請等一下','warning')
			return
		}
		const allLogs = appsmith.store.allLogs
		const filteredLogs = allLogs.filter( log => log['學員名稱'] === userName)
		return filteredLogs
	},

	postDataToIframe () {
		postWindowMessage(this.myVar1, 'Iframe1', "*");
	}
}