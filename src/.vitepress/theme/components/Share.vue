<template>
  <div class="social-share">
    <span>Share on </span>
    <button @click="share('twitter')">
      <i class="fab fa-twitter"></i> Twitter
    </button>
    <button @click="share('facebook')">
      <i class="fab fa-facebook-f"></i> Facebook
    </button>
    <button @click="share('linkedin')">
      <i class="fab fa-linkedin-in"></i> LinkedIn
    </button>
    <button @click="share('whatsapp')">
      <i class="fa fa-whatsapp"></i> WhatsApp
    </button>
  </div>
</template>

<script>
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookF, faTwitter, faLinkedinIn);
dom.watch();

export default {
  methods: {
    share(platform) {
      let url = '';
      const text = encodeURIComponent(window.document.title);
      let shareUrl = document.URL;
      let hashIndex = shareUrl.indexOf('#');
      if (hashIndex > -1) {
        shareUrl = shareUrl.substring(0, hashIndex);
      }
      shareUrl = encodeURIComponent(shareUrl);

      switch(platform) {
        case 'facebook':
          url = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${text}`;
          break;
        case 'twitter':
          url = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${text}`;
          break;
        case 'linkedin':
          url = `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${text}`;
          break;
        case 'whatsapp':
          url = `https://api.whatsapp.com/send?text=${text + ' ' + shareUrl}`;
          break;
        default:
          break;
      }

      window.open(url, '_blank');
    }
  }
}
</script>

<style scoped>
.social-share {
  margin-top: 25px;
}
.social-share button {
  margin: 0 5px;
}
</style>