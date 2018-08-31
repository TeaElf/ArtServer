<template>
    <modal v-if="showModal" :width="70" :show="showModal" @close="closeModal()" @save="openNewAlbum()">
    <h1 slot="header">New Album: </h1>
    <div slot="body" class="row">
      <div class="col-lg-12">
        <b-form-group label="Title:">
            <b-form-input id="exampleInput1"
                        type="text"
                        v-model="album.title"
                        required
                        placeholder="Enter title...">
            </b-form-input>
        </b-form-group>
        <b-form-group label="Short description:">
            <b-form-input id="exampleInput2"
                        type="text"
                        v-model="album.description"
                        required
                        placeholder="Enter short description...">
            </b-form-input>
        </b-form-group>
      </div>
    </div>
  </modal>
</template>
<script>
import Modal from './Modal'
export default {
    props: {
        showModal: {
            type: Boolean
        }
    },
    data () {
        return {
            album: {
                title: '',
                description: ''
            }
        }
    },
    components: {
        'modal': Modal
    },
    methods: {
        closeModal () {
            this.$emit('closeModal')
        },
        openNewAlbum () {
            this.$emit('openNewAlbum', this.album);
            this.album.title = '';
            this.album.description = '';
        }
    }
}
</script>
