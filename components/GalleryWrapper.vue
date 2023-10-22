<template>
    <div class="project-masonry-section">
        <div class="container">
            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 box mesonry-list mtn-30">
                <div class="col mt-30" :class="project.category" v-for="(project, index) in projectData" :key="index">
                    <div class="single-project-wrap">
                        <div class="project-thumb position-relative">
                            <nuxt-link to="/project-details" class="image">
                                <img :src="project.imgSrc" :alt="project.title">
                            </nuxt-link>
                        </div>
                        <div class="inner-content">
                            <div class="sub-title">{{ project.category }}</div>
                            <h4 class="title">
                                <nuxt-link to="/project-details">{{ project.title }}</nuxt-link>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row section-padding-bottom">
                <div class="col-12">
                    <div class="load-more text-center mt-30">
                        <a href="javascript:void(0)" @click="loadMore" v-if="currentItem < projects.length">...Load more...</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                currentItem: 6,
                projects: [
                    {
                        imgSrc: "/images/gallery/2.jpg",
                        title: "Dustin Villa, Spain",
                        category: "residential"
                    },
                    {
                        imgSrc: "/images/gallery/3.jpg",
                        title: "ABC Financial Bank",
                        category: "commercial"
                    },
                    {
                        imgSrc: "/images/gallery/4.jpg",
                        title: "Cubic Villa",
                        category: "residential"
                    },
                    {
                        imgSrc: "/images/gallery/5.jpg",
                        title: "Culture House",
                        category: "architecture"
                    },
                    {
                        imgSrc: "/images/gallery/6.jpg",
                        title: "B6-No.5 OLA Tower",
                        category: "interior"
                    },
                    {
                        imgSrc: "/images/gallery/7.jpg",
                        title: "Minimal Interior - A5, Italy",
                        category: "interior"
                    },
                    {
                        imgSrc: "/images/gallery/2.jpg",
                        title: "Dustin Villa, Spain",
                        category: "residential"
                    },
                    {
                        imgSrc: "/images/gallery/3.jpg",
                        title: "ABC Financial Bank",
                        category: "commercial"
                    },
                    {
                        imgSrc: "/images/gallery/4.jpg",
                        title: "Cubic Villa",
                        category: "residential"
                    },
                ]
            }
        },
        computed: {
            projectData() {
                return this.projects.slice(0, this.currentItem);
            }
        },
        methods: {
            loadMore() {
                this.currentItem += 3;
            }
        }
    };
</script>
