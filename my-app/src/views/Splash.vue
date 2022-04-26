<template>
  <div class="home mt--64px">
    <div id="splash-bg">
      <div id="splash-overlay" />
    </div>

    <div id="splash-main">
      <v-container
        class="fill-height"
      >
        <v-row class="fill-height">
          <v-col>
            <div class="d-flex flex-column justify-space-around splash-main-wrapper">
              <h2
                class="
            font-1
            save"
              >
                SAVE THE DATE
              </h2>
              <div class="center-text-container">
                <h1 class="font-2 names">
                  KRISTEN
                </h1>
                <h1 class="font-4 ampersand">
                  &amp;
                </h1>
                <h1 class="font-2 names">
                  DAMIAN
                </h1>
              </div>
              <h3 class="font-3 date">
                10 | 1 | 22
              </h3>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Splash from '@/components/Splash.vue'

export default {
  name: 'Splash',

  data: () => ({
    drawer: false
  })
}
</script>

<style lang="scss" scoped>
@import "../scss/style.scss";

#splash-bg{
    width:100vw;
    height:100vh;
    background-color:black;

    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    background-image: url('../assets/bg1.jpg');
    position:absolute;
    //z-index: 0;
    #splash-overlay{
        position: absolute;
        top:0;
        left:0;
        width:100vw;
        height:100vh;
        background:rgba(0,0,0,0.55);
    }
}
#splash-main{
    position: relative;
    height:100vh;
    text-align:center;

    .splash-main-wrapper{
        width:100%;
        height:100%;
    }

    h2{
        color:#fff;
        font-size:5rem;
    }
    h3{
        color:#fff;
        font-size:5rem;
    }
    .font-2{
        letter-spacing:10px;
    }

    .save{
        font-size:2.5rem;
        letter-spacing: .8rem;
        color:#fff;
        @include respond-below(sm){
            font-size:2.1rem;
            letter-spacing: .2rem;
        }
    }

    .names{
        color:#fff;
        font-size:4rem;
        text-shadow: 5px 5px 0px #058fa678;
        @include respond-below(sm){
            font-size:2.9rem;
        }
    }
    .date{
        font-size:3rem;
        letter-spacing: .5rem;
        color:#fff;

    }

    .center-text-container{
        position:relative;
        .ampersand{
            position: relative;
            z-index: 0;
            font-size:8rem;
            color: rgba(255,255,255,.5);
            text-shadow: 5px 5px 0px #058fa678;
            margin: -24px 0 -35px;
            @include respond-below(sm){
                font-size:6rem;
                margin: -19px 0 -23px;
            }
        }
        h1{
            position: relative;
            z-index: 1;
            margin-bottom:0;
        }
    }

}

</style>
