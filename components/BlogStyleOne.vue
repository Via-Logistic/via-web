<template>
    <div class="news-section">
        <div class="container-fluid p-0">
            <div class="row g-0">
                <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100" v-for="(blog, index) in blogs" :key="index">
                    <BlogPost :blog="blog" />
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
                        title: "The Way Of Building",
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
                    {
                        imgSrc: "/images/news/4.jpg",
                        title: "Nordic Interior Style",
                        date: "Nov 28, 2021",
                        category: "others"
                    }
                ]
            }
        },
    };
</script>