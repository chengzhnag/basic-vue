<template>
	<div class="box">
		<van-cell title="选择单个日期" :value="date" @click="show = true" />
		<van-calendar v-model="show" @confirm="onConfirm" />
	</div>
</template>

<script>
import { getData } from '@/api/index.js';
export default {
	data() {
		return {
			date: '',
			show: false
		};
	},
	mounted() {
		this.$toast('look hear');
		getData({ a: 123 })
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				this.$toast(err || '错误');
			});
	},
	methods: {
		formatDate(date) {
			return `${date.getMonth() + 1}/${date.getDate()}`;
		},
		onConfirm(date) {
			this.show = false;
			this.date = this.formatDate(date);
		}
	}
};
</script>

<style scoped lang="scss">
.box {
	@include wh(100%, 100%);
	padding-top: 14px;
}
.first {
	@include flexcenter();
	width: 375px;
	height: 100px;
}
</style>
