<template>
<div class="wscn-http404-container">
    <div class="wscn-http404">
        <div class="pic-404">
            <img class="pic-404__parent" src="@/assets/image/404.png" alt="404">
        </div>
        <div class="bullshit">
            <div class="bullshit__headline" v-html="message"></div>
            <div class="bullshit__return-home" @click="goback">返回</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Page404',
    data() {
        return {
            message: '您访问的页面走丢了~~~！'
        }
    },
    methods: {
        goback() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
.wscn-http404-container {
    width: 100%;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 55%;
    left: 50%;
    height: auto;
}

.wscn-http404 {
    position: relative;
    width: 80%;
    margin-left: 10%;
    overflow: hidden;

    .pic-404 {
        position: relative;
        width: 100%;
        overflow: hidden;

        &__parent {
            width: 100%;
        }

        &__child {
            position: absolute;

            &.left {
                width: 80px;
                top: 17px;
                left: 220px;
                opacity: 0;
                animation-name: cloudLeft;
                animation-duration: 1s;
                animation-timing-function: linear;
                animation-fill-mode: forwards;
                animation-delay: 0.5s;
            }

            &.mid {
                width: 46px;
                top: 10px;
                left: 420px;
                opacity: 0;
                animation-name: cloudMid;
                animation-duration: 1s;
                animation-timing-function: linear;
                animation-fill-mode: forwards;
                animation-delay: 0.7s;
            }

            &.right {
                width: 62px;
                top: 100px;
                left: 500px;
                opacity: 0;
                animation-name: cloudRight;
                animation-duration: 1s;
                animation-timing-function: linear;
                animation-fill-mode: forwards;
                animation-delay: 0.5s;
            }

            @keyframes cloudLeft {
                0% {
                    top: 17px;
                    left: 220px;
                    opacity: 0;
                }

                20% {
                    top: 33px;
                    left: 188px;
                    opacity: 1;
                }

                80% {
                    top: 81px;
                    left: 92px;
                    opacity: 1;
                }

                100% {
                    top: 97px;
                    left: 60px;
                    opacity: 0;
                }
            }

            @keyframes cloudMid {
                0% {
                    top: 10px;
                    left: 420px;
                    opacity: 0;
                }

                20% {
                    top: 40px;
                    left: 360px;
                    opacity: 1;
                }

                70% {
                    top: 130px;
                    left: 180px;
                    opacity: 1;
                }

                100% {
                    top: 160px;
                    left: 120px;
                    opacity: 0;
                }
            }

            @keyframes cloudRight {
                0% {
                    top: 100px;
                    left: 500px;
                    opacity: 0;
                }

                20% {
                    top: 120px;
                    left: 460px;
                    opacity: 1;
                }

                80% {
                    top: 180px;
                    left: 340px;
                    opacity: 1;
                }

                100% {
                    top: 200px;
                    left: 300px;
                    opacity: 0;
                }
            }
        }
    }

    .bullshit {
        position: relative;
        width: 100%;
        padding: 30px 0;
        overflow: hidden;

        &__headline {
            font-size: 18px;
            line-height: 24px;
            color: #999;
            font-weight: bold;
            opacity: 0;
            margin-bottom: 10px;
            animation-name: slideUp;
            animation-duration: 0.5s;
            animation-delay: 1s;
            animation-fill-mode: forwards;
        }

        &__return-home {
            display: block;
            float: right;
            width: 110px;
            height: 36px;
            background: #1482f0;
            border-radius: 100px;
            text-align: center;
            color: #ffffff;
            opacity: 0;
            font-size: 14px;
            line-height: 36px;
            cursor: pointer;
            animation-name: slideUp;
            animation-duration: 0.5s;
            animation-delay: 0.3s;
            animation-fill-mode: forwards;
        }

        @keyframes slideUp {
            0% {
                transform: translateY(60px);
                opacity: 0;
            }

            100% {
                transform: translateY(0);
                opacity: 1;
            }
        }
    }
}
</style>
