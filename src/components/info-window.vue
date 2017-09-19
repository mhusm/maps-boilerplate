<template>
    <div class="iw-container">
        <div class="iw-title">{{ title }}</div>
        <div class="iw-content">
        <img  :src="portrait" class="iw-img">
        {{ content }}
            <router-link :to="'../details/' +id">More...</router-link>
            </div>
        <div class="iw-bottom-gradient"></div>
    </div>  
</template>

<script>
export default {
  name:'info-window',
    props: ['title', 'content', 'portrait', 'id'],
    data: function () {
      return {

        }
    }
}
</script>

<style scoped>
.iw-container {
	margin-bottom: 10px;
	max-width: 350px;
}

.iw-container .iw-content {
	font-size: 13px;
	line-height: 18px;
	font-weight: 400;
	margin-right: 1px;
	padding: 15px 5px 20px 15px;
	max-height: 140px;
	overflow-y: auto;
	overflow-x: hidden;
	text-align: left;
}
.iw-content img {
	float: right;
	margin: 0 5px 5px 10px;	
    max-width: 50%
}

.iw-title {
	font-weight: 800;
	font-size: 16px;
}


</style>


