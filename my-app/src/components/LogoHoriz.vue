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
  name: 'LogoHoriz',
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
    @import "../scss/style.scss";

    .center-text-container{
        display:flex;
        align-items:center;
        text-align:center;
        position:relative;

        .ampersand{
            position: relative;
            z-index: 0;
            font-size:2rem;
            color: #058fa680;
            text-shadow: 4px 1px 0px rgb(255 255 255);
            margin: 0 16px 0 8px;

            @include respond-below(sm){
                font-size:1rem;
                margin: 0 9px 0 5px;
            }
        }
        .names{
            font-size:1rem;
            letter-spacing:10px;
            color: #058fa6c9;
            text-shadow: 3px 3px 0px #fff;
            position: relative;
            z-index: 1;
            margin-bottom:0;
            @include respond-below(sm){
                font-size:.5rem;
                letter-spacing:5px;
            }
        }
    }
</style>
