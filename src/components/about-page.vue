<template>
    <div>
        <div v-html="content" class="content"> </div>
    </div>
</template>
<script>
// for translating markdown to HTML
import Marked from 'marked'

export default {
  name: 'about-page',
    data: function () {
        return {
            content : ""
        };
    },
    mounted: function () {
        contentfulClient.getEntry("6cfyOFxX20qK8sICeo2a0K")
        .then(entry => {
            console.log(entry.fields.content);
            this.content = Marked(entry.fields.content);
        })
        .catch(error =>{
            console.error(error);
        });
    }
}
</script>

<style scoped>


</style>
