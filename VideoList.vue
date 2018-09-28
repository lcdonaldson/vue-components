<template>
    <ul>
        <VideoListItem
            class="videoListItem"
            v-for="video in videos"
            :video="video"
            :key="video"
        >
        </VideoListItem>
    </ul>
</template>

<script>
import VideoListItem from './VideoListItem';
export default {
    name: 'VideoList',
    components: {
        VideoListItem
    },
    props: {
        videos: Array
    }
}
</script>

<style>
.videoListItem { text-decoration: none; }
</style>
