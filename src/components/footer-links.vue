<template>
  <div class="footer-links">
    <div class="container-fluid">
      <div class="row social-links">
        <a class="link link--dark"
            :href="$t('href.github')"
            :title="$t('nouns.github')"
            target="_blank"
            rel="nofollow noreferrer noopener">
          <i class="fab fa-github"></i>
        </a>
        <a class="link link--dark"
            :href="$t('href.npm')"
            :title="$t('nouns.npm')"
            target="_blank"
            rel="nofollow noreferrer noopener">
          <i class="fab fa-npm"></i>
        </a>
        <a class="link link--dark"
            :href="$t('href.careers.twitter')"
            :title="$t('nouns.twitter')"
            target="_blank"
            rel="nofollow noreferrer noopener">
          <i class="fab fa-twitter"></i>
        </a>
        <a class="link link--dark"
            :href="$t('href.linkedin')"
            :title="$t('nouns.linkedin')"
            target="_blank"
            rel="nofollow noreferrer noopener">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a class="link link--dark link--careers"
            rel="nofollow noreferrer noopener"
            target="_blank"
            :href="$t('href.careers.page')">
          {{ $t('nouns.adidascareers') }}
        </a>
      </div>
      <div class="row bottom-links">
        <header class="bottom-links__header">
          <a class="link link--dark"
              :href="$t('href.eCom.link')"
              target="_blank"
              rel="nofollow noreferrer noopener">
            {{ $t('href.eCom.text') }}
          </a>
        </header>
        <a class="link link--dark"
            href="mailto:software.engineering@adidas.com"
            rel="nofollow noreferrer noopener">
          {{ $t('footer.links.contact') }}
        </a>
        <nuxt-link :to="localePath('legal-notice')" class="link link--dark">
          {{ $t('footer.links.legalNotice') }}
        </nuxt-link>
        <nuxt-link :to="localePath('privacy-notice')" class="link link--dark">
          {{ $t('footer.links.privacyStatement') }}
        </nuxt-link>
        <a class="link link--dark"
            :href="$t('href.imprint.link')"
            target="_blank"
            rel="nofollow noreferrer noopener">
          {{ $t('href.imprint.text') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer-links'
};
</script>

<style lang="scss">
  @import '../styles/vars';

  .footer-links {
    background-color: rgba($primary-black, .75);
    padding: 1.5em 3em 0;
    white-space: nowrap;

    .social-links {
      font-size: $font-size-large;
      padding-bottom: 1.5em;

      @media (max-width: $screen-xs) {
        text-align: center;
      }

      .link {
        padding: .25em .5em;
      }

      .link--careers {
        @media (max-width: $screen-xs) {
          display: block;
        }
      }
    }

    .bottom-links {
      border-top: 1px solid $primary-gray;
      text-align: right;
      padding-top: 1.25em;
      padding-bottom: 2.5em;

      @media (min-width: $screen-xs) {
        padding-top: .75em;
        padding-bottom: 1.25em;
      }

      &__header {
        font-family: $font-family-adihaus-din;
        font-weight: bold;
        display: inline-block;
      }

      .link {
        padding: 0 1em;

        @media (max-width: $screen-md) {
          display: block;
        }
      }
    }
  }
</style>
