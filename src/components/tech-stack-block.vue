<template>
  <div class="tech-block">
    <h3 class="tech-block__headline">
      {{ title }}
    </h3>
    <div class="tech-block__body">
      <div class="tech-block__body__img">
        <img v-lazy="imageUrl" :alt="`${title} logo`"/>
      </div>
      <div class="tech-block__body__summary">
        <slot></slot>
      </div>
    </div>
    <div class="tech-block__footer">
      <div class="separator-wrapper">
        <div class="separator"></div>
      </div>
      <div class="tech-block__footer__labels">
        <a class="btn btn-primary"
            v-for="(tag, index) in tags"
            :key="index"
            :href="tag.url"
            target="_blank"
            rel="nofollow noreferrer noopener">
          {{ tag.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'title', 'imageUrl', 'tags' ]
};
</script>

<style lang="scss">
  @import '../styles/vars';
  @import '../styles/mixins';

  .tech-block {
    border-bottom: 2px solid $blue-100;
    color: $primary-black;
    position: relative;
    padding: 3em 5% 5em;
    margin: 0 10%;

    @media (max-width: $screen-md) {
      padding-bottom: 2em;
    }

    .separator {
      width: 30%;

      &--left {
        left: -2.5%;
      }

      &--right {
        right: -2.5%;
      }
    }

    &__headline {
      margin-bottom: 1em;
      text-transform: uppercase;

      @media (max-width: $screen-md) {
        text-align: center;
      }
    }

    &__body {
      display: flex;

      @media (max-width: $screen-lg) {
        display: block;
      }

      &__img {
        position: relative;
        flex: 0;
        flex-basis: 15.5em;
        width: 15.5em;
        text-align: center;

        @media (max-width: $max-width) {
          width: 9.5;
          flex-basis: 9.5;
        }

        @media (max-width: $screen-lg) {
          width: 25%;
          flex: 1;
          margin: 0 auto;
        }

        > img {
          @include center-vertically();
          width: 100%;
          left: 0;
          right: 0;

          @media (max-width: $screen-lg) {
            position: relative;
            transform: none;
            top: auto;
          }
        }
      }

      &__summary {
        text-align: justify;
        margin-left: 3em;
        flex: 1;

        @media (max-width: $screen-lg) {
          margin-top: 2em;
          margin-left: 0;
          width: 100%;
        }
      }
    }

    &__footer {
      position: absolute;
      display: flex;
      flex-direction: row;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;

      @media (max-width: $screen-md) {
        margin-top: 2em;
        position: relative;
      }

      .separator-wrapper {
        position: relative;
        flex: 1;
        width: 100%;

        @media (max-width: $screen-md) {
          display: none;
        }

        .separator {
          width: 100%;
          top: auto;
          left: -2em;
          bottom: -1em;
          z-index: 2;

          @media (max-width: $screen-lg) {
            min-width: 12.5em;
          }
        }
      }

      &__labels {
        width: auto;
        display: flex;
        flex: 0;
        flex-direction: row;
        flex-basis: auto;
        flex-wrap: wrap;
        justify-content: flex-end;

        @media (max-width: $screen-md) {
          flex: 1;
        }

        > .btn {
          line-height: 2;
          margin-left: .75em;
          margin-bottom: .75em;
          height: 2em;
        }
      }
    }
  }
</style>
