<template>
<div class="container">
    <div class="row">
        <div class="col-sm-4 m-auto">
            <div class="text-start">
                <h3 class="py-3">
                OUR TEAM
                </h3>
                <p class="py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac aliquam quam, 
                sed congue ipsum. Curabitur semper ipsum mi, vitae maximus purus volutpat non. Suspendisse potenti. 
                Praesent sapien est, porttitor dignissim placerat sit amet, posuere ac ligula. Proin volutpat lobortis f
                aucibus. Proin facilisis, nunc ut viverra aliquet, magna sapien pulvinar elit, eu facilisis erat enim nec 
                ex. Donec vitae sem quis eros aliquam feugiat. Duis at consectetur nisl. Nulla commodo lorem vel pharetra 
                rutrum. Nunc nisl ligula, vulputate et maximus quis, hendrerit non ligula. Class aptent taciti sociosqu 
                ad litora torquent per conubia nostra, per inceptos himenaeos. Sed magna augue, euismod eu molestie id, 
                dignissim non ipsum. Suspendisse varius purus at nulla condimentum volutpat quis ut dui. 
                Fusce non risus ultricies risus pulvinar tempus quis nec urna</p>
            </div>
            
            <div class="d-flex justify-content-center">
                    <router-link class="btn" to="about">Read More</router-link>
            </div>
        </div>
        <div class="col-sm-5 m-auto"><img src="../../assets/images/OurTeam.svg"></div>
    </div>
</div>
    
</template>

<script>
export default {
    name:'HomeContent2'
}
</script>

<style lang="css" scoped>

    img {
    padding: 10px;
    max-width: 100%; 
    max-height: auto;
    opacity: 0.9;
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
    
     p {
        letter-spacing: 2px;
    }

     h3 {
        letter-spacing: 2px;
    }

</style>