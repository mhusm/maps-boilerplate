<template>
    <div class="details-page">
        <h1> {{title}} </h1>
        <div> <img class="portrait" :src="portrait"> {{ content }} </div>
        <img v-for="item in images" :src="item" :key="item" >
        
        </img>
    </div>
</template>
<<script>
export default {
  name: 'details-page',
    props: [ 'id'],
    data: function () {
        return {
            title: "",
            content : "",
            images: [],
            portrait: ""
        };
    },
    mounted: function () {
        contentfulClient.getEntry(this.id)
        .then(entry => {
            console.log(entry);
            this.title = entry.fields.title;
            this.content = entry.fields.longText;
            this.images = [];
            if (entry.fields.images) {
                entry.fields.images.forEach(element => {
                    contentfulClient.getAsset(element.sys.id)
                    .then(img => {
                        console.log(img.fields.file);
                        this.images.push(img.fields.file.url);
                    })
                });
            }
            if (entry.fields.portrait) {
                contentfulClient.getAsset(entry.fields.portrait.sys.id)
                .then(img => {
                    this.portrait = img.fields.file.url;
                });
            }
        })
        .catch(error =>{
            console.error(error);
        
        });
    }
}
</script>

<style scoped>

img {
    max-width: 80%;
}

.portrait {
    float: right;
    max-width: 40%;
}

</style>
