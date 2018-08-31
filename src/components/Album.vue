<template>
    <div>
        <b-button variant="primary" @click="openModal()">Create new album</b-button><br>
        <div class="row">
            <div v-for="(album, index) in albums" :key="index">
                <div style="margin-left: 10px; margin-top: 10px">
                <album-preview-item
                    :index="index"
                    :title="album.title"
                    :description="album.description"
                    :dateAndTimeOfCreation="album.dateAndTimeOfCreation"
                    :dateAndTimeOfLastUpdate="album.dateAndTimeOfLastUpdate"
                    :linkToAlbumCover="album.linkToAlbumCover"
                    @openAlbum="openAlbum"
                ></album-preview-item>
                </div>
            </div>
            <create-album-modal
                :showModal="showModal"
                @closeModal="closeModal"
                @openNewAlbum="openNewAlbum"
            ></create-album-modal>
        </div>
    </div>
</template>

<script>
import AlbumPreviewItem from './AlbumPreviewItem'
import CreateAlbumModal from './modal/CreateAlbumModal'
import albumService from '@/service/album'

export default {
    components: {
        'album-preview-item': AlbumPreviewItem,
        'create-album-modal': CreateAlbumModal
    },
    data() {
        return {
            msg: "Cao svima",
            showModal: false,
            albums: [
                {
                    title: 'Prvi album',
                    description: 'Opis 1',
                    dateAndTimeOfCreation: new Date(2018, 8,27,12,21,30,45),
                    dateAndTimeOfLastUpdate: new Date(2018, 8,27,12,22,30,10),
                    linkToAlbumCover: 'http://localhost/tearesources/Mikko-Lagerstedt-Lost-World.jpg'
                },
                {
                    title: 'Drugi album',
                    description: 'Opis 2',
                    dateAndTimeOfCreation: new Date(2018, 8,27,12,21,30,45),
                    dateAndTimeOfLastUpdate: new Date(2018, 8,27,12,22,30,10),
                    linkToAlbumCover: 'http://localhost/tearesources/Mikko-Lagerstedt-Lost-World.jpg'
                },
                {
                    title: 'Treci album',
                    description: 'Opis 3',
                    dateAndTimeOfCreation: new Date(2018, 8,27,12,21,30,45),
                    dateAndTimeOfLastUpdate: new Date(2018, 8,27,12,22,30,10),
                    linkToAlbumCover: 'http://localhost/tearesources/Mikko-Lagerstedt-Lost-World.jpg'
                },
                {
                    title: 'Cetvrti album',
                    description: 'Opis 4',
                    dateAndTimeOfCreation: new Date(2018, 8,27,12,21,30,45),
                    dateAndTimeOfLastUpdate: new Date(2018, 8,27,12,22,30,10),
                    linkToAlbumCover: 'http://localhost/tearesources/Mikko-Lagerstedt-Lost-World.jpg'
                }
            ]
        };
    },
    methods: {
        openAlbum (index) {
            console.log('Treba otvoriti album sa index-om: '+index);
        },
        openModal () {
            this.showModal = true;
        },
        closeModal () {
            this.showModal = false;
        },
        openNewAlbum (album) {
            var albumDto = {
                name: album.title,
                description: album.description
            }
            albumService.createNewAlbum(
                albumDto,
                result => {
                    console.log(result)
                    console.log(album);
                    this.showModal = false;
                },
                err => {
                    console.log('Error!')
                    console.log(err)
                }
            );
        }
    }
};
</script>

