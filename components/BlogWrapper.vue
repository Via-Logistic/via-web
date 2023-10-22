<template>
    <div class="blog-tab-section">
        <div class="container">
            <div class="row row-cols-1 box mtn-50">
                <!-- Single blog Start -->
                <div class="col mt-50" :class="blog.category" v-for="(blog, index) in blogData" :key="index">
                    <div class="single-blog-wrap">
                        <div class="blog-thumb">
                            <nuxt-link to="/blog-details" class="image">
                                <img class="fit-image" :src="blog.imgSrc" :alt="blog.title">
                            </nuxt-link>
                        </div>
                        <div class="inner-content">
                            <ul class="info-list">
                                <li>{{ blog.date }}</li>
                                <li>{{ blog.category }}</li>
                            </ul>
                            <h4 class="title">
                                <nuxt-link to="/blog-details">{{ blog.title }}</nuxt-link>
                            </h4>
                            <p>{{ blog.desc }}</p>
                            <nuxt-link to="/blog-details" class="article">
                                full article <span class="arrow icofont-rounded-right"></span>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <!-- Single blog End -->
            </div>

            <div class="row section-padding-bottom">
                <div class="col-12">
                    <div class="load-more text-center mt-50">
                        <a href="javascript:void(0)" @click="loadMore" v-if="currentItem < blogs.length">...Load more...</a>
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
                currentItem: 4,
                blogs: [
                    {
                        date: "Jan 28, 2021",
                        imgSrc: "/images/news/blog/1.jpg",
                        title: "The Way Of Building",
                        category: "interior",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav da metus. Curabitur quis sagittis nisl. In lectus ligula, varius quis..."
                    },
                    {
                        date: "Jun 08, 2021",
                        imgSrc: "/images/news/blog/2.jpg",
                        title: "The Arch In Modern Architecture, Art and Aesthetic More",
                        category: "commercial",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav da metus. Curabitur quis sagittis nisl. In lectus ligula, varius quis..."
                    },
                    {
                        date: "Mar 15, 2021",
                        imgSrc: "/images/news/blog/3.jpg",
                        title: "Spiral Stair, New Interior Design Trends 2021",
                        category: "architecture",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav da metus. Curabitur quis sagittis nisl. In lectus ligula, varius quis..."
                    },
                    {
                        date: "Nov 25, 2020",
                        imgSrc: "/images/news/blog/4.jpg",
                        title: "Nordic Interior Style",
                        category: "residential",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav da metus. Curabitur quis sagittis nisl. In lectus ligula, varius quis..."
                    },
                    {
                        date: "Nov 25, 2022",
                        imgSrc: "/images/news/blog/2.jpg",
                        title: "Nordic Interior Style",
                        category: "residential",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav da metus. Curabitur quis sagittis nisl. In lectus ligula, varius quis..."
                    },
                ]
            }
        },
        computed: {
            blogData() {
                return this.blogs.slice(0, this.currentItem);
            }
        },
        methods: {
            loadMore() {
                this.currentItem += 3;
            }
        }
    }
</script>
