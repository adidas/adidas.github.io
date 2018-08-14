import adidoescode from '~/components/adidoescode.vue';
import BlogPost from '~/components/blog-post.vue';
import Card from '~/components/card.vue';
import KPI from '~/components/kpi.vue';
import TechStackBlock from '~/components/tech-stack-block.vue';
import { getContents } from '~/services/contents';
import { getOpenSource } from '~/services/open-source';

export default {
  layout: 'content',
  asyncData() {
    return Promise.all([
      getOpenSource(),
      getContents()
    ])
    .then(([
      openSource = [],
      {
        events = [],
        careers = [],
        techStack = [],
        kpis = [],
        featuredFlag = {}
      }
    ]) => ({
      openSource,
      careers,
      events,
      techStack,
      kpis,
      featuredFlag
    }));
  },
  methods: {
    sort(list) {
      return list.sort((a, b) => a.sortOrder - b.sortOrder);
    }
  },
  computed: {
    orderedKpis() {
      return this.sort(this.kpis);
    },
    orderedTechStack() {
      return this.sort(this.techStack);
    },
    orderedCareers() {
      return this.sort(this.careers);
    }
  },
  components: {
    adidoescode,
    TechStackBlock,
    BlogPost,
    Card,
    'kpi-item': KPI
  }
};
