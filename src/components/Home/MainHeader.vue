<template>
    <div id="header" class="py-5">
            <div class="container pt-5 d-flex justify-content-center">
                <div class="row pt-5 justify-content-center">
                    <div class="col-lg-12 pt-5">
                        <div class="text-center pt-5">
                           <h1 class="responsive-font display-5 fw-bolder text-white mb-2"><strong>THE PINNACLE</strong></h1>
                            <h4 class="responsive-font1 lead text-white-50 mb-4">OPERATING SYSTEM INC.</h4>
                            <div class="d-grid gap-3 d-sm-flex justify-content-center">
                                <button class="btn btn-outline-warning btn-lg px-4 me-sm-3" @click="$emit('scrollFromChild', 'HomeContent2')">Get Started</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainHeader',
}
</script>

<style lang="css" scoped>


    /* If the screen size is 1200px wide or more, set the font-size to 80px */
    @media (min-width: 1200px) {
        .responsive-font {
            font-size: 80px;
            letter-spacing: 15px;
        }
        .responsive-font1 {
            font-size: 30px;
            letter-spacing: 17px;
        }
    }
    /* If the screen size is smaller than 1200px, set the font-size to 80px */
    @media (max-width: 1199.98px) {
        .responsive-font {
            font-size: 30px;
            letter-spacing: 10px;
        }

        .responsive-font1 {
            font-size: 10px;
            letter-spacing: 10px;
        }
    }
     /* If the screen size is smaller than 1199.98 */
    @media (max-width: 340px) {
        .responsive-font {
            font-size: 15px;
            letter-spacing: 5px;
        }

        .responsive-font1 {
            font-size: 8px;
            letter-spacing: 3px;
        }
    }
    #header {
        height: 900px;
        width: 100%;
        background-image: url('../../assets/images/Home.svg');
        background-size: cover;
        background-repeat: no-repeat;
        font-family: 'Poppins';
    }

    h1 {
        font-weight: normal;
    }
   
    
    .btn{
        background-color: #f0662e;
        border: none;
        color: white;
        transition-duration: 0.3s;
        
    }

    .btn:hover{
        background-color: orange;
        color: white;
    }


  
</style>