<template>
    <div class="error404">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="error-image">
                        <img class="img-fluid" src="/images/page-404-image.png" alt="Not Found Image">
                    </div>
                    <h1 class="error-404-title text-white" v-if="error.statusCode === 404">Oops! Page not found!</h1>
                    <h1 class="error-404-title text-white" v-else>An error occurred</h1>
                    <div class="error-buttons">
                        <button @click="$router.go(-1)" class="btn btn-primary btn-hover-dark">
                            <span class="button-text">Go back previous page</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            error: {
                type: Object,
                default: () => {},
            },
        }   
    }
</script>

<style lang="scss">
    .error404 {
        display: flex;
        height: 100vh;
        align-items: center;
        justify-content: center;
        background-color: #111111;
    }
    .error-404-title {
        font-weight: 500;
        padding-top: 40px;
        margin-bottom: 30px;
        //res
        @media #{$extra-small-mobile} {
            font-size: 30px;
        }
    }
</style>