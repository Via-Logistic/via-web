<template>
    <div class="section-padding-bottom">
        <div class="container">
            <div class="blog-related-news">
                <div class="row">
                    <div class="col-xl-8 col-lg-10 offset-xl-2 offset-lg-1" data-aos="fade-up" data-aos-delay="300">
                        <div class="section-title">
                            <h4 class="title text-capitalize">Related Posts</h4>
                        </div>
                    </div>
                </div>

                <div class="row mtn-30">
                    <div class="col-lg-4 col-md-6 mt-30" data-aos="fade-up" data-aos-delay="100" v-for="(blog, index) in blogs.slice(0, 3)" :key="index">
                        <BlogPost :blog="blog" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            BlogPost: () => import('@/components/BlogPost'),
        },

        data() {
            return {
                blogs: [
                    {
                        imgSrc: "/images/news/1.jpg",
                        title: "The Way Of Building Nordic Interior",
                        date: "Jan 28, 2021",
                        category: "news"
                    },
                    {
                        imgSrc: "/images/news/2.jpg",
                        title: "The Arch In Modern Architecture & Art",
                        date: "Mar 21, 2021",
                        category: "inspiration"
                    },
                    {
                        imgSrc: "/images/news/3.jpg",
                        title: "Spiral Stair, New Interior Design Trends 2020",
                        date: "Apr 26, 2021",
                        category: "lifestyle"
                    },
                ]
            }
        },
    };
</script>