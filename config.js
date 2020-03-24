const fs = require('fs');
const path = require('path');
const isDifferent = false; // 是否开启项目差异化功能
const baseFile = './base_src'; // 存放初始代码的文件夹
const useFile = './src'; // 编译使用的src路径
const targetPath = './differences/init_src'; // 目标路径 (./differences/init_src)默认值

// 拿到node命令最后的参数  node app.js ij  ij就是要获取的参数
let stage = process.argv[2] || '';
console.log(stage);

// 通过stage去配置文件中找到该stage的配置项信息
let alone = getField(stage);
console.log(alone);

if (isDifferent && alone) {
	// 1. 删除src目录, 把base_src目录下文件拷贝到src
	copyToSrc();

	// 3. 再从各自线差异化文件夹中文件复制到各自文件位置
	thirdStep(alone);
} else {
	// 1. 删除base_src目录, 把当前src目录下文件拷贝到base_src
	copyToBaseSrc();
}
/*
 * 1. isDifferent  删除src目录, 把base_src目录下文件拷贝到src
 * 1. !isDifferent 删除base_src目录, 把当前src目录下文件拷贝到base_src
 * 2. isDifferent  再从各自线差异化文件夹中文件复制到各自文件位置
 */


function deleteall(path) { // 删除path目录下所有文件包括本身
	var files = [];
	if (fs.existsSync(path)) {
		files = fs.readdirSync(path);
		files.forEach(function(file, index) {
			var curPath = path + "/" + file;
			if (fs.statSync(curPath).isDirectory()) { // recurse
				deleteall(curPath);
			} else { // delete file
				fs.unlinkSync(curPath);
			}
		});
		fs.rmdirSync(path);
	}
};

function copyFolder(from, to) { // 复制文件夹到指定目录
	let files = [];
	if (fs.existsSync(to)) { // 文件是否存在 如果不存在则创建
		files = fs.readdirSync(from);
		files.forEach(function(file, index) {
			var targetPath = from + "/" + file;
			var toPath = to + '/' + file;
			if (fs.statSync(targetPath).isDirectory()) { // 复制文件夹
				copyFolder(targetPath, toPath);
			} else { // 拷贝文件
				fs.copyFileSync(targetPath, toPath);
			}
		});
	} else {
		fs.mkdirSync(to);
		copyFolder(from, to);
	}
}

function getField(stage) {
	if (!stage) return null;
	let data = fs.readFileSync(path.join(__dirname, './config.json'), 'utf8');
	let obj = null;
	if (data) {
		data = JSON.parse(data);
		data = data.configs;
		for (let i = 0; i < data.length; i++) {
			if (data[i]['stage'] == stage) {
				obj = data[i];
			}
		}
	}
	return obj;
}

// 拷贝文件到src目录
function copyToSrc() {
	let files = fs.readdirSync(baseFile);
	try {
		deleteall(useFile);
		fs.mkdirSync(useFile.split('/').pop(), '0755');

		files.forEach(function(file, index) {
			var targetPath = baseFile + "/" + file;
			var toPath = useFile + '/' + file;
			if (fs.statSync(targetPath).isDirectory()) { // 复制文件夹
				copyFolder(targetPath, toPath);
			} else { // 拷贝文件
				fs.copyFileSync(targetPath, toPath);
			}
		})
	} catch (error) {
		console.log(error);
	}
}

// 拷贝文件到base_src目录
function copyToBaseSrc() {
	let files = fs.readdirSync(useFile);
	try {
		deleteall(baseFile);
		fs.mkdirSync(baseFile.split('/').pop(), '0755');

		files.forEach(function(file, index) {
			var targetPath = useFile + "/" + file;
			var toPath = baseFile + '/' + file;
			console.log('正在拷贝' + targetPath + ' to ' + toPath);
			if (fs.statSync(targetPath).isDirectory()) { // 复制文件夹
				copyFolder(targetPath, toPath);
			} else { // 拷贝文件
				fs.copyFileSync(targetPath, toPath);
			}
		})
	} catch (error) {
		console.log(error);
	}
}

function secondStep(alone) {
	let appJSON = './app.json';
	let projectConfig = './project.config.json'
	let data = fs.readFileSync(path.join(__dirname, projectConfig), 'utf8');
	if (data) {
		data = JSON.parse(data);
		data.appid = alone.appid;
		data = JSON.stringify(data, null, 4);
		fs.writeFileSync(projectConfig, data, 'utf8');
	}

	let data2 = fs.readFileSync(path.join(__dirname, appJSON), 'utf8');
	if (data2) {
		data2 = JSON.parse(data2);
		data2.window.navigationBarTitleText = alone.appName;
		data2 = JSON.stringify(data2, null, 4);
	}
	console.log("正在写入 '" + alone.appName + "' 配置");
	console.log("********************************");
	fs.writeFileSync(appJSON, data2, 'utf8');
}

function thirdStep(alone) {
	if (alone.folder) {
		console.log("正在复制 '" + alone.appName + "' 差异化文件");
		console.log("********************************");
		let files = fs.readdirSync(alone.folder);
		files.forEach(function(file, index) {
			var targetPath = alone.folder + "/" + file;
			var toPath = useFile + '/' + file;
			console.log("差异化文件路径: " + file);
			if (fs.statSync(targetPath).isDirectory()) { // 复制文件夹
				copyFolder(targetPath, toPath);
			} else { // 拷贝文件
				fs.copyFileSync(targetPath, toPath);
			}
		})
		console.log("********************************");
		console.log("修改、写入配置完成, 当前线路是: " + alone.appName);
	}
}
