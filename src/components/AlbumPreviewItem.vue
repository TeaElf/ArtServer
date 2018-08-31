<template>
    <b-card
          :img-src="linkToAlbumCover"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
        <p class="card-text">
            <b>{{ title }}</b>
        </p>
        <p class="card-text">
            {{ description }}
        </p>
         <p class="card-text">
            {{ dateAndTimeOfCreation }}
        </p>
         <p class="card-text">
            {{ dateAndTimeOfLastUpdate }}
        </p>
        <b-button @click="openAlbum()" variant="primary">Open</b-button>
    </b-card>
</template>

<script>
export default {
    name: 'AlbumPreviewItem',
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        index: {
            type: Number,
            required: true
        },
        dateAndTimeOfCreation: {
            type: Date,
            required: true
        },
        dateAndTimeOfLastUpdate: {
            type: Date,
            required: true
        },
        linkToAlbumCover: {
            type: String,
            required: true
        }
    },
    methods: {
        openAlbum () {
            console.log(this.index);
            this.$emit('openAlbum', this.index);
        }
    }
}
</script>
