<template>
  <div class="list-group-item list-group-item-light">
    <span class="label" v-if="!model.name">
      {{ $t(`views.contributing.${model.id}`) }}
    </span>
    <router-link class="link label"
        v-if="model.name"
        :to="localePath({
          name: model.name,
          params: {
            document: model.id
          }
        })">
      {{ $t(`views.contributing.${model.id}`) }}
    </router-link>
    <div class="list-group list-group--vertical" v-if="model.children">
      <sidebar-list v-for="(item, index) in model.children" :key="index" :model="item"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar-list',
  props: [ 'model' ]
};
</script>
