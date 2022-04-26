<template>
  <div class="center-text-container">
    <div class="font-2 names">
      KRISTEN
    </div>
    <div class="font-4 ampersand">
      &amp;
    </div>
    <div class="font-2 names">
      DAMIAN
    </div>
  </div>
</template>
<script>
export default {
  name: 'LogoVert',
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
    @import "../scss/style.scss";

    .font-2{
        letter-spacing:10px;
    }
    .names{
        font-size:2rem;
        color: #058fa6c9;
        text-shadow: 5px 5px 0px #fff;
        @include respond-below(sm){
            font-size:1.5rem;
        }
    }
    .center-text-container{
        text-align:center;
        position:relative;
        margin-bottom:1rem;
        .ampersand{
            position: relative;
            z-index: 0;
            font-size:4rem;
            color: #058fa680;
            text-shadow: 4px 1px 0px rgb(255 255 255);
            margin: -21px 0 -24px;
            @include respond-below(sm){
                font-size:3.2rem;
                margin: -14px 0 -18px;
            }
        }
        .names{
            position: relative;
            z-index: 1;
            margin-bottom:0;
        }
    }
</style>
