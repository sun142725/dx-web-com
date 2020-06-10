<template>
	<div>
	    <div class="doctor-list-container">
			1112
	      <image-text-u-d
	        v-for="(item, index) in list"
	        :key="index"
	        :doctorPic="item.portraitFilePath"
	        :title="item.doctorName"
	        :subTitle="item.doctorTitleName"
	        :doctorTags="[item.deptName2]"
	        :remark="item.goodAt"
	        :price="item.servicePrice"
	        @btnClick="()=>btnClick(item)"
	      ></image-text-u-d>
		  <ImageTextUD></ImageTextUD>
	    </div>
	</div>
</template>
<script>
	import { ImageTextUD } from '../index'
	export default{
		name: 'ImageText',
		components: { ImageTextUD },
		data: function(){
			return {
				list: [{
					mainPic: ''
				}]
			}
		},
		methods: {}
	}
</script>
<style lang="scss" scoped>
.doctor-list-container{

}
</style>