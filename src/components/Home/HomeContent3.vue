<template>
<div class="container">
    <div class="row">
             <h3 class="text-center pb-5">
                OUR CLIENTS
            </h3>
        <div class="d-flex justify-content-center m-auto">
            <div class="col-md-3">
                <img src="../../assets/images/L8logo.png"> 
            </div>
            <div class="col-md-3">
                    <img src="../../assets/images/PMlogo.png">
            </div>
            <div class="col-md-3">
                <img src="../../assets/images/armslogo.png">
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'HomeContent3'
}
</script>

<style lang="css" scoped>
    .container {
        height: 300px;
    }

     img {
        height: auto; 
        width: 100%; 
        max-width: 100%; 
        max-height: auto;
    }

    .btn{
        background-color: #a52b7a;
        border: none;
        color:white;
        transition-duration: 0.4s;
        width: 200px;
        
    }

    .btn:hover{
        background-color: orange;
        color: violet;
    }
</style>