<template>
  <v-card class="detail-card" elevation="2">
    <div class="detail-wrapper">
      <div class="member-image">
        <img :src="member.avatar_url" alt="" />
      </div>
      <div class="member-info">
        <h2>{{ member.login }}</h2>
        <h4>{{ member.id }}</h4>
        <v-btn class="return-button" elevation="2" color="primary" to="/">
          Return
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { memberService } from "@/services/members";
import { MemberEntity } from "@/types";
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    member: {} as MemberEntity,
  }),
  computed: {
    id(): string {
      return String(this.$route.params.login);
    },
  },
  created() {
    memberService
      .getMember(this.id)
      .then((member: MemberEntity | undefined) => {
        if (member) {
          this.member = member;
        }
      });
  },
});
</script>

<style lang="scss" scoped>
.detail-wrapper {
  margin: 1%;
}

.member-image {
  text-align: center;
}

.member-info {
  text-align: center;
}

.member-image img {
  border-radius: 50%;
  height: 10rem;
}

.detail-card {
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  width: 25%;
  min-width: 20rem;
  padding: 2rem;
}

.return-button {
  margin-top: 1rem;
}
</style>
